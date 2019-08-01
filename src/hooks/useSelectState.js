import { useState } from 'react';

export default initialVal => {
  const [selectedDate, setSelectedDate] = useState(Date());
  const [valueInvalid, setValueInvalid] = useState(null);
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(initialVal);

  const handleDateChange = e => setSelectedDate(e);
  const handleClickOpen = () => setOpen(true);
  
  const handleChange = e => {
    setValue(e.target.value);
    setValueInvalid(null);
  };
  const reset = () => {
    setValue('');
    setValueInvalid(null);
  };
  const handleClose = () => {
    setOpen(false);
    reset();
	};
  return [value, valueInvalid, setValueInvalid, handleChange, open, handleClickOpen, handleClose, selectedDate, handleDateChange];
};