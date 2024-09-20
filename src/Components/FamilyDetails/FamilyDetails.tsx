import React from 'react';
import { Box, RadioGroup, FormControlLabel, Radio, FormGroup } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';
import CheckboxInput from '../Checkbox/Checkbox';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const FamilyDetails: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box className="form-section">
      <FormGroup>
        <RadioGroup name="maritalStatus" value={values.maritalStatus} onChange={handleChange}>
          <FormControlLabel value="Холост/Не замужем" control={<Radio />} label="Холост/Не замужем" />
          <FormControlLabel value="Женат/Замужем" control={<Radio />} label="Женат/Замужем" />
          <FormControlLabel value="Разведен(а)" control={<Radio />} label="Разведен(а)" />
          <FormControlLabel value="Вдовец/Вдова" control={<Radio />} label="Вдовец/Вдова" />
        </RadioGroup>
      </FormGroup>
      <CheckboxInput
        name="hasChildren"
        label="Есть ли в вашей семье дети или внуки не достигшие 14 лет?"
        checked={values.hasChildren}
        onChange={handleChange}
      />
    </Box>
  );
};

export default FamilyDetails;