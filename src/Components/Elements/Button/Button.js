import React from 'react';
import styled from 'styled-components';

const ButtonElement = ({ children, ...otherProps }) => {
  return <ButtonStyle {...otherProps}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding: 1em 1em;
  margin: 2em 0em;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 10em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default ButtonElement;
