import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"

function SignedOut({signIn}) {
  return (
    <div><StyledLink to="/registration">Registration</StyledLink>
 <StyledLink to="/signIn">Sign In</StyledLink>
 <GoogleImg src={'/images/google.png'} onClick={signIn} />
</div>
  )
}

export default SignedOut


const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;


const GoogleImg = styled.img`
  cursor: pointer;
  height: 2rem;
`;