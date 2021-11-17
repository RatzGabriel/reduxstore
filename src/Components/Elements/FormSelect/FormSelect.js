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

const FormDiv = styled.div``;

const Select = styled.select`
  padding-left: 15px;
  padding-right: 15px;
  min-height: 40px;
  font-size: 18px;
  background-color: ${(props) => (props.dm ? 'white' : color)};
  color: ${(props) => (props.dm ? 'black' : '#B0ACAC')};
  border: 1px solid white;
  outline: none;
`;
