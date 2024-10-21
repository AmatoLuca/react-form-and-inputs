import React, { useState } from 'react';

/* interface UseInputProps {
  defaultValue: string;
} */

function useInput(defaultValue: string) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    didEdit,
    handleInputBlur,
    handleInputChange,
  };
}

export default useInput;
