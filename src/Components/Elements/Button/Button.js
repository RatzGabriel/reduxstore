import React from 'react';
import styled from 'styled-components';

function Button({ children, ...otherProps }) {
  return <ButtonElement {...otherProps}>{children}</ButtonElement>;
}

export default Button;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bg || 'white'};
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  min-height: 40px;
  font-size: 18px;
  width: 6rem;
  border: none;
  cursor: pointer;
`;
