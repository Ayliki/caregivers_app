import React from 'react';
import { Box, TextField, FormGroup, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
  values: FormikProps<FormValues>['values'];
  handleChange: FormikProps<FormValues>['handleChange'];
}

const RecommendationDetails: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend" className="form-label">
        Сообщите, кто может дать рекомендацию о вашей работе (не менее трех): Имя, телефон, должность рекомендодателя
      </FormLabel>
      {values.recommendationDetails.map((recommendation, index) => (
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }} key={index}>
          <TextField
            fullWidth
            name={`recommendationDetails[${index}].name`}
            label={`Имя ${index + 1}`}
            value={recommendation.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name={`recommendationDetails[${index}].phone`}
            label={`Телефон ${index + 1}`}
            value={recommendation.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name={`recommendationDetails[${index}].position`}
            label={`Должность ${index + 1}`}
            value={recommendation.position}
            onChange={handleChange}
          />
        </Box>
      ))}
    </FormGroup>
  );
};

export default RecommendationDetails;