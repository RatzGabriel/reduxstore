import React from 'react';
import styled from 'styled-components';
import { color } from '../../../colors';

const ButtonElement = ({ children, ...otherProps }) => {
  return <ButtonStyle {...otherProps}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  color: ${(props) => (props.dm ? 'black' : 'white')};
  background-color: ${(props) => (props.dm ? 'white' : color)};
  padding: 1em 1em;
  margin: ${(props) => (props.margin ? props.margin : '1em')};
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 13em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default ButtonElement;
