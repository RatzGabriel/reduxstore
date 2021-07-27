import React from 'react';
import styled from 'styled-components';

function FormInput({ label, ...otherProps }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <Input {...otherProps}></Input>
    </div>
  );
}

export default FormInput;

const Input = styled.input`
  width: 100%;
`;
