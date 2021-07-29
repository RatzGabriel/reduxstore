import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LinkEement({ children, adress }) {
  return <StyledLink to={adress}>{children}</StyledLink>;
}

export default LinkEement;

const StyledLink = styled(Link)`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding: 1em 1em;
  margin: 5em 0em;
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 10em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
