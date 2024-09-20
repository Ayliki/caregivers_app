import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const AdditionalExperience: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        name="additionalExperience"
        label="Кратко напишите о Вашем опыте ухода"
        value={values.additionalExperience}
        onChange={handleChange}
      />
    </Box>
  );
};

export default AdditionalExperience;