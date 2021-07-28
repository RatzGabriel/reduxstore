import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

function LoggedIn({signOut}) {
  return (
    <div>
        <StyledLink to="/payment">
                  <EuroSymbolIcon />
                </StyledLink>
                <StyledLink onClick={() => signOut()}>Logout</StyledLink>
                <StyledLink to="/dashboard">Dashboard</StyledLink>
    </div>
  )
}

export default LoggedIn

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;