import nodemailer from 'nodemailer';
import XLSX from 'xlsx';
import { PDFDocument, rgb } from 'pdf-lib';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateExcelFile = (data) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([data]);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Form Data');
  return XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
};

const generatePDFFile = async (data) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText(JSON.stringify(data, null, 2), { x: 50, y: 350, size: 12, color: rgb(0, 0, 0) });
  return pdfDoc.save();
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    try {
      const excelFile = generateExcelFile(formData);
      const pdfFile = await generatePDFFile(formData);

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ilyabelov518@gmail.com',
        subject: 'Form Submission',
        text: 'Please find attached the form data.',
        attachments: [
          { filename: 'form_data.xlsx', content: excelFile },
          { filename: 'form_data.pdf', content: pdfFile },
        ],
      };

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