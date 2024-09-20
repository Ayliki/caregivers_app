import React from 'react';
import { Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { FormikProps } from 'formik';
import CheckboxInput from '../Checkbox/Checkbox';
import TextInput from '../TextInput/TextInput';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const WorkDetails: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box className="form-section">
      <CheckboxInput
        name="hasBankCard"
        label="Имеется ли карта сбербанка для начисления зарплаты?"
        checked={values.hasBankCard}
        onChange={handleChange}
      />
      <TextInput
        name="experienceYears"
        label="Опыт работы (лет/месяцев)"
        value={values.experienceYears}
        onChange={handleChange}
      />
      <FormGroup>
        <FormControlLabel control={<Checkbox name="schedule" value="Дневные смены" onChange={handleChange} />} label="Дневные смены" />
        <FormControlLabel control={<Checkbox name="schedule" value="Патронаж" onChange={handleChange} />} label="Патронаж" />
        <FormControlLabel control={<Checkbox name="schedule" value="Короткие смены" onChange={handleChange} />} label="Короткие смены" />
        <FormControlLabel control={<Checkbox name="schedule" value="Сутки" onChange={handleChange} />} label="Сутки" />
        <FormControlLabel control={<Checkbox name="schedule" value="Ночные смены" onChange={handleChange} />} label="Ночные смены" />
        <FormControlLabel control={<Checkbox name="schedule" value="С проживанием" onChange={handleChange} />} label="С проживанием" />
      </FormGroup>
    </Box>
  );
};

export default WorkDetails;