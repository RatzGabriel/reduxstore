import React from 'react';
import styled from 'styled-components';

const FormSelect = ({
  options,
  defaultValue,
  handleChange,
  label,
  ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <FormDiv>
      {label && <label>{label}</label>}

      <Select value={defaultValue} onChange={handleChange} {...otherProps}>
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
  padding: 1em;
`;

const Select = styled.select`
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 35px;
  font-weight: 600;
  min-height: 40px;
  font-size: 18px;
  background-color: brown;
  color: white;
`;
