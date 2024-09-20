import React from 'react';
import { Box } from '@mui/material';
import { FormikProps } from 'formik';
import TextInput from '../TextInput/TextInput';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
  errors: FormikProps<FormValues>['errors'];
  touched: FormikProps<FormValues>['touched'];
}

const ContactDetails: React.FC<Props> = ({ values, handleChange, errors, touched }) => {
  return (
    <Box className="form-section">
      <TextInput
        name="ownPhone"
        label="Контактные телефоны (собственные)"
        value={values.ownPhone}
        onChange={handleChange}
        error={touched.ownPhone && Boolean(errors.ownPhone)}
        helperText={touched.ownPhone && errors.ownPhone}
      />
      <TextInput
        name="relativePhone"
        label="Дополнительные контактные телефоны (родственники)"
        value={values.relativePhone}
        onChange={handleChange}
      />
      <TextInput
        name="passportDetails"
        label="Паспортные данные"
        value={values.passportDetails}
        onChange={handleChange}
        error={touched.passportDetails && Boolean(errors.passportDetails)}
        helperText={touched.passportDetails && errors.passportDetails}
      />
    </Box>
  );
};

export default ContactDetails;