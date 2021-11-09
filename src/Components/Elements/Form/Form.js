import React from 'react';
import styled from 'styled-components';

function FormInput({ label, ...otherProps }) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Input {...otherProps}></Input>
    </div>
  );
}

export default FormInput;

const Input = styled.input`
  width: 100%;
  margin: 0.5em 0;
  border: 0.669444px solid rgba(60, 66, 87, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 1.33889px 3.34722px rgba(0, 0, 0, 0.08),
    0px 0.669444px 0.669444px rgba(0, 0, 0, 0.04);
  border-radius: 5.35556px;
  padding: 6.025px 8.03333px;
`;

const Label = styled.label`
  color: #697386;
  font-size: 0.58rem;
  font-family: roboto;
  font-weight: 900;
`;
