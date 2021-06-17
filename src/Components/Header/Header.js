import React from 'react';
import styled from 'styled-components';
import testLogo from '../../Assets/testLogo.jpeg';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/Utils';
import Button from '../Elements/Button/Button';

function Header({ currentUser }) {
  return (
    <DivHeader>
      <Wrap>
        <Link to="/">
          <LogoImg src={testLogo} alt="logo image" />
        </Link>
        <Link to="/registration">Registration</Link>
        <Link to="/signIn">Sign In</Link>
        {!currentUser && (
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        )}
        {currentUser && <Button onClick={() => auth.signOut()}>Logout</Button>}
      </Wrap>
    </DivHeader>
  );
}

export default Header;

//Styled Components

const DivHeader = styled.div`
  color: red;
  background-color: black;
  height: 10rem;
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-left: 1rem;
  border-radius: 20%;
`;
