import React from 'react';
import { Box, TextField, FormGroup, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const CreditDetails: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Наличие у Вас кредитов</FormLabel>
      {values.creditDetails.map((credit, index) => (
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }} key={index}>
          <TextField
            fullWidth
            name={`creditDetails[${index}].bank`}
            label="Банк"
            value={credit.bank}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name={`creditDetails[${index}].amount`}
            label="Сумма"
            value={credit.amount}
            onChange={handleChange}
          />
        </Box>
      ))}
    </FormGroup>
  );
};

export default CreditDetails;