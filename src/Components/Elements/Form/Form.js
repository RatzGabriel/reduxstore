import React from 'react';

function FormInput({ children, ...otherProps }) {
  return <input {...otherProps}></input>;
}

export default FormInput;
