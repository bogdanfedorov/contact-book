import React from 'react';
import validators from './validators';

export default ({
  type,
  label,
  setDataForm,
  ...attrs
}) => {
  const setValue = data => {
    setDataForm((validators[type](data)) ? null : data);
  };
  return (
    <>
      <label for={type}>{label}</label>
      <input
        type='text'
        id={type}
        name={type}
        onBlur={event => setValue(event.target.value)}
        onChange={event => setValue(event.target.value)}
        {...attrs}
      />
    </>
  );
};