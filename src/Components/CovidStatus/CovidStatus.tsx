import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const CovidStatus: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Статус на COVID</FormLabel>
      <FormControlLabel control={<Checkbox name="covidStatus" value="вакцинирован" onChange={handleChange} />} label="Вакцинирован" />
      <FormControlLabel control={<Checkbox name="covidStatus" value="НЕ вакцинирован" onChange={handleChange} />} label="НЕ вакцинирован" />
      <FormControlLabel control={<Checkbox name="covidStatus" value="переболел" onChange={handleChange} />} label="Переболел" />
      <FormControlLabel control={<Checkbox name="covidStatus" value="НЕ переболел" onChange={handleChange} />} label="НЕ переболел" />
      <TextField
        fullWidth
        name="covidIllnessDate"
        label="Когда переболел? (месяц, год)"
        value={values.covidIllnessDate}
        onChange={handleChange}
      />
    </FormGroup>
  );
};

export default CovidStatus;