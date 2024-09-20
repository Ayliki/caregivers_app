import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values?: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const MedicalProceduresExperience: React.FC<Props> = ({ handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Опыт выполнения медицинских процедур</FormLabel>
      <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Гигиена больного" onChange={handleChange} />} label="Гигиена больного" />
      <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Подкожные и внутримышечные инъекции" onChange={handleChange} />} label="Подкожные и внутримышечные инъекции" />
      <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Работа со стомами/катетерами" onChange={handleChange} />} label="Работа со стомами/катетерами" />
      <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Обработка пролежней" onChange={handleChange} />} label="Обработка пролежней" />
      <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Уход за лежачими больными" onChange={handleChange} />} label="Уход за лежачими больными" />
    </FormGroup>
  );
};

export default MedicalProceduresExperience;