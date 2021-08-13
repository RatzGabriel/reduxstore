import React from 'react';
import styled from 'styled-components';
import { color } from '../../../colors';

const FormSelect = ({
  options,
  defaultValue,
  handleChange,
  label,
  dm,
  ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;
  console.log(dm);
  return (
    <FormDiv>
      {label && <label>{label}</label>}
      <Select
        value={defaultValue}
        onChange={handleChange}
        {...otherProps}
        dm={dm}
      >
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>
              {name}
            </option>
          );
        })}
      </Select>
    </FormDiv>
  );
};

export default FormSelect;

const FormDiv = styled.div`
  margin-bottom: 1em;
`;

const Select = styled.select`
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 35px;
  font-weight: 600;
  min-height: 40px;
  font-size: 18px;
  background-color: ${(props) => (props.dm ? 'white' : color)};
  color: ${(props) => (props.dm ? 'black' : 'white')};
  border: none;
  outline: none;
`;
