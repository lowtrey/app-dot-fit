import { useState } from 'react';

export default initialVal => {
  const [valueInvalid, setValueInvalid] = useState(null);
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
    setValueInvalid(null);
  };
  const reset = () => {
    setValue('');
    setValueInvalid(null);
  };
  return [value, valueInvalid, setValueInvalid, handleChange, reset];
};