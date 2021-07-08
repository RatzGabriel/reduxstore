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

      <Zelect value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>
              {name}
            </option>
          );
        })}
      </Zelect>
    </FormDiv>
  );
};

export default FormSelect;

const FormDiv = styled.div`
  margin-bottom: 1em;
  padding: 1em;
`;

const Zelect = styled.select`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background-color: black;
  cursor: pointer;
`;
