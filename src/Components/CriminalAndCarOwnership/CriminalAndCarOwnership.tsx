import React from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const CriminalAndCarOwnership: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box className="form-section">
      <FormControlLabel
        control={<Checkbox name="criminalRecord" checked={values.criminalRecord} onChange={handleChange} />}
        label="Судимость"
      />
      <FormControlLabel
        control={<Checkbox name="hasCar" checked={values.hasCar} onChange={handleChange} />}
        label="Личный автомобиль"
      />
      <FormControlLabel
        control={<Checkbox name="smokes" checked={values.smokes} onChange={handleChange} />}
        label="Вы курите?"
      />
      <FormControlLabel
        control={<Checkbox name="drives" checked={values.drives} onChange={handleChange} />}
        label="Водите ли Вы автомобиль?"
      />
    </Box>
  );
};

export default CriminalAndCarOwnership;