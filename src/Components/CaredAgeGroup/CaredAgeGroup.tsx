import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const CaredAgeGroup: React.FC<Props> = ({ handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Возраст людей за которыми вы ухаживали</FormLabel>
      <FormControlLabel control={<Checkbox name="caredAgeGroup" value="до 18 лет" onChange={handleChange} />} label="До 18 лет" />
      <FormControlLabel control={<Checkbox name="caredAgeGroup" value="от 18 до 55 лет" onChange={handleChange} />} label="От 18 до 55 лет" />
      <FormControlLabel control={<Checkbox name="caredAgeGroup" value="от 55 лет" onChange={handleChange} />} label="От 55 лет" />
    </FormGroup>
  );
};

export default CaredAgeGroup;