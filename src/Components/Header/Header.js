import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import testLogo from '../../Assets/testLogo.jpeg';
import Button from '../Elements/Button/Button';
import {
  googleSignInStart,
  signOutUserStart,
} from '../../Redux/User/user.actions';
import { checkUserIsAdmin } from '../../CustomHooks/checkUserIsAdmin';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function Header() {
  const { currentUser } = useSelector(mapState);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const signIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <MainDiv>
      <WrapDiv>
        <Link to="/">
          <LogoImg src={testLogo} alt="logo image" />
        </Link>
        <Link to="/registration">Registration</Link>
        <Link to="/signIn">Sign In</Link>
        <Link to="forgotPassword">Forgot Password</Link>
        {checkUserIsAdmin(currentUser) && <Link to="/admin">Admin</Link>}
        {!currentUser && <Button onClick={signIn}>Sign in with Google</Button>}
        {currentUser && <Button onClick={() => signOut()}>Logout</Button>}
        {<button onClick={() => console.log(currentUser)}></button>}
      </WrapDiv>
    </MainDiv>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

//Styled Components

const MainDiv = styled.div`
  color: red;
  background-color: black;
  height: 10rem;
`;

const WrapDiv = styled.div`
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
