import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

interface CheckboxInputProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox name={name} checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};

export default CheckboxInput;