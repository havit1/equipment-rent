import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
