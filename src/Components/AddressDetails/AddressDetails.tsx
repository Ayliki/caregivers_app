import React from 'react';
import { Box } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';
import TextInput from '../TextInput/TextInput';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const AddressDetails: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box className="form-section">
      <TextInput name="city" label="Город проживания" value={values.city} onChange={handleChange} />
      <TextInput name="district" label="Район проживания" value={values.district} onChange={handleChange} />
      <TextInput
        name="registrationAddress"
        label="Адрес по прописке"
        value={values.registrationAddress}
        onChange={handleChange}
      />
      <TextInput
        name="actualAddress"
        label="Адрес фактического проживания"
        value={values.actualAddress}
        onChange={handleChange}
      />
    </Box>
  );
};

export default AddressDetails;