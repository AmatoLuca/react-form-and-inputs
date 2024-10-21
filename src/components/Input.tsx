import React from 'react';

type InputProps = {
  label: string;
  id: string;
  error?: string | undefined;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  onBlur: (identifier: string) => void;
};

const Input = ({
  label,
  id,
  error,
  type,
  name,
  value,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className="control no-margin">
      <label htmlFor="email">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event, type)}
        onBlur={() => onBlur(type)}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
