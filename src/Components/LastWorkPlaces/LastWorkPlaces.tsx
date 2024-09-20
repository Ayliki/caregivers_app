import React from 'react';
import { Box, TextField, FormGroup, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const LastWorkPlaces: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend" className="form-label">
        Назовите 3 последних места работы:
      </FormLabel>
      {values.lastWorkPlaces.map((job, index) => (
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }} key={index}>
          <TextField
            fullWidth
            name={`lastWorkPlaces[${index}].company`}
            label={`Компания ${index + 1}`}
            value={job.company}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name={`lastWorkPlaces[${index}].position`}
            label={`Должность ${index + 1}`}
            value={job.position}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name={`lastWorkPlaces[${index}].duration`}
            label={`Продолжительность ${index + 1}`}
            value={job.duration}
            onChange={handleChange}
          />
        </Box>
      ))}
    </FormGroup>
  );
};

export default LastWorkPlaces;