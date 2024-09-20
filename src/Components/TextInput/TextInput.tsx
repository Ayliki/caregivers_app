import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  error?: boolean;
  helperText?: string | undefined | false;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name, label, value, onChange, error, helperText, type = 'text',
}) => {
  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputLabelProps={type === 'date' ? { shrink: true } : undefined}
      type={type}
    />
  );
};

export default TextInput;