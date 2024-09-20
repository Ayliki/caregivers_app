import nodemailer from 'nodemailer';
import XLSX from 'xlsx';
import { PDFDocument, rgb } from 'pdf-lib';
import dotenv from 'dotenv';

dotenv.config();

// Email configuration (replace with your email credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate Excel file from form data
const generateExcelFile = (data) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([data]);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Form Data');

  const excelBuffer = XLSX.write(workbook, {
    type: 'buffer',
    bookType: 'xlsx',
  });
  return excelBuffer;
};

// Generate PDF file from form data
const generatePDFFile = async (data) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText(JSON.stringify(data, null, 2), {
    x: 50,
    y: 350,
    size: 12,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const excelFile = generateExcelFile(formData);
      const pdfFile = await generatePDFFile(formData);

      // Set up the email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'recipient_email@gmail.com',
        subject: 'Form Submission',
        text: 'Please find attached the form data.',
        attachments: [
          { filename: 'form_data.xlsx', content: excelFile },
          { filename: 'form_data.pdf', content: pdfFile },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}