import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from '../../colors';

function LoggedIn({signOut}) {
  return (
    <MainDiv>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/wishlist">WishList</StyledLink>
      <Button color={color}  onClick={() => signOut()}>Logout</Button>
    </MainDiv>
  )
}

export default LoggedIn

const Button=styled.button`
 display: flex;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  background-color: ${props=>props.color};
  border: none;
  padding: 1em;
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
  @media(min-width:962px){
    
    font-style: normal;
    font-weight:normal;
    color: black;
  }
`;