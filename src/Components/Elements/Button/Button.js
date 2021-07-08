import React from 'react';
import styled from 'styled-components';

function Button({ children, ...otherProps }) {
  return <ButtonElement {...otherProps}>{children}</ButtonElement>;
}

export default Button;

const ButtonElement = styled.div`
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bg || 'white'};
  padding: 1em;
  margin: 1em;
`;
