import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';


interface Props {
  values?: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const DutiesWillingToPerform: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Готовы ли Вы выполнять след. обязанности?</FormLabel>
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Приготовление еды" onChange={handleChange} />} label="Приготовление еды" />
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Уборка помещения" onChange={handleChange} />} label="Уборка помещения" />
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Стирка" onChange={handleChange} />} label="Стирка" />
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Глажка белья" onChange={handleChange} />} label="Глажка белья" />
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Покупка продуктов и медикаментов" onChange={handleChange} />} label="Покупка продуктов и медикаментов" />
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Прогулки" onChange={handleChange} />} label="Прогулки" />
      <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Разовые поручения" onChange={handleChange} />} label="Разовые поручения" />
    </FormGroup>
  );
};

export default DutiesWillingToPerform;