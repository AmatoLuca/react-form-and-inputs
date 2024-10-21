import React from 'react';

type InputProps = {
  label: string;
  id: string;
  error?: string | undefined;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
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
        onChange={(event) => onChange(event)}
        onBlur={onBlur}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
