import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from '../../interface';

interface Props {
    values?: FormikProps<FormValues>['values'];
    handleChange: FormikProps<FormValues>['handleChange'];
}

const MedicalConditionsExperience: React.FC<Props> = ({ values, handleChange }) => {
    return (
        <FormGroup>
            <FormLabel component="legend">Опыт работы с больными по диагнозам</FormLabel>
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Деменция (болезнь Альцгеймера)" onChange={handleChange} />} label="Деменция (болезнь Альцгеймера)" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="ДЦП" onChange={handleChange} />} label="ДЦП" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Инсульт (постинсультная реабилитация)" onChange={handleChange} />} label="Инсульт (постинсультная реабилитация)" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Инфаркт (постинфарктная реабилитация)" onChange={handleChange} />} label="Инфаркт (постинфарктная реабилитация)" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Паркинсонизм (болезнь Паркинсона)" onChange={handleChange} />} label="Паркинсонизм (болезнь Паркинсона)" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Психические расстройства" onChange={handleChange} />} label="Психические расстройства" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Сахарный диабет" onChange={handleChange} />} label="Сахарный диабет" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Переломы, в т.ч шейки бедра" onChange={handleChange} />} label="Переломы, в т.ч шейки бедра" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Онкология" onChange={handleChange} />} label="Онкология (уточнить)" />
            <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Другое" onChange={handleChange} />} label="Другое" />
        </FormGroup>
    );
};

export default MedicalConditionsExperience;