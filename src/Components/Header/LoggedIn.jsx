import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


function LoggedIn({signOut}) {
  return (
    <MainDiv>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/wishlist">WishList</StyledLink>
      <Button  onClick={() => signOut()}>Logout</Button>
    </MainDiv>
  )
}

export default LoggedIn

const Button=styled.button`
 display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`

const MainDiv=styled.div`
display:flex;
align-items: center;

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