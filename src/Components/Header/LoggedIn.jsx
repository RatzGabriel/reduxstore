import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

function LoggedIn({signOut}) {
  return (
    <MainDiv>
        <StyledLink to="/payment">
                  <EuroSymbolIcon />
                </StyledLink>
               
                <StyledLink to="/dashboard">Dashboard</StyledLink>
                <StyledLink to="/wishlist">WishList</StyledLink>
                <StyledLink onClick={() => signOut()}>Logout</StyledLink>
    </MainDiv>
  )
}

export default LoggedIn

const MainDiv=styled.div`
display:flex;

width: 80%;
justify-content: space-around;
`

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;