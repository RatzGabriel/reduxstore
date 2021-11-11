import React from 'react';
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
