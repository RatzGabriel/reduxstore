import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../../../colors';
import { useSelector } from 'react-redux';

const mapState = ({ darkmode }) => ({
  darkmodefromState: darkmode,
});

const ButtonElement = ({ children, ...otherProps }) => {
  const { darkmodefromState } = useSelector(mapState);

  const darkmode = darkmodefromState.darkmode;

  return (
    <ButtonStyle {...otherProps} dm={darkmode}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  color: ${(props) => (props.dm ? 'black' : 'white')};
  background-color: ${(props) => (props.dm ? 'white' : color)};
  padding: 1em 1em;
  margin: 0em 0em;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 10em;
  margin: 3em 0em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default ButtonElement;
