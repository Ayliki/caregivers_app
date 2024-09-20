import React from 'react';
import { Box } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';
import TextInput from '../TextInput/TextInput';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
  errors: FormikProps<FormValues>['errors'];
  touched: FormikProps<FormValues>['touched'];
}

const PersonalDetails: React.FC<Props> = ({ values, handleChange, errors, touched }) => {
  return (
    <Box className="form-section">
      <TextInput
        name="surname"
        label="Фамилия"
        value={values.surname}
        onChange={handleChange}
        error={touched.surname && Boolean(errors.surname)}
        helperText={touched.surname && errors.surname}
      />
      <TextInput
        name="name"
        label="Имя"
        value={values.name}
        onChange={handleChange}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <TextInput
        name="patronymic"
        label="Отчество"
        value={values.patronymic}
        onChange={handleChange}
        error={touched.patronymic && Boolean(errors.patronymic)}
        helperText={touched.patronymic && errors.patronymic}
      />
      <TextInput
        name="maidenName"
        label="Фамилия до замужества"
        value={values.maidenName}
        onChange={handleChange}
      />
      <TextInput
        name="birthDate"
        label="Дата рождения"
        value={values.birthDate}
        onChange={handleChange}
        type="date"
        error={touched.birthDate && Boolean(errors.birthDate)}
        helperText={touched.birthDate && errors.birthDate}
      />
    </Box>

    
  );
};

export default PersonalDetails;