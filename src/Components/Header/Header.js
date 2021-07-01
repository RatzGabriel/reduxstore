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
import { selectCartItemsCount } from '../../Redux/Cart/cart.selectors';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

function Header() {
  const { currentUser, totalNumCartItems } = useSelector(mapState);

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
        <div>
          <Link to="/">
            <LogoImg src={testLogo} alt="logo image" />
          </Link>
        </div>
        <div>
          <StyledLink to="/search">Search</StyledLink>
          <StyledLink to="/cart">Cart</StyledLink>
        </div>
        <div>
          {checkUserIsAdmin(currentUser) && (
            <StyledLink to="/admin">Admin</StyledLink>
          )}
          {!currentUser && (
            <StyledLink to="/registration">Registration</StyledLink>
          )}
          {!currentUser && <StyledLink to="/signIn">Sign In</StyledLink>}
          {!currentUser && (
            <Button onClick={signIn}>Sign in with Google</Button>
          )}
          {!currentUser && (
            <StyledLink to="/forgotPassword">Forgot Password</StyledLink>
          )}
          {currentUser && <StyledLink to="/payment">Payment</StyledLink>}
          {currentUser && <StyledLink to="/dashboard">Dashboard</StyledLink>}
          <StyledLink to="/cart">Your Cart ({totalNumCartItems})</StyledLink>
          {currentUser && (
            <StyledLink onClick={() => signOut()}>Logout</StyledLink>
          )}
        </div>
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
  height: 10rem;
  background-color: transparent;
  position: fixed;
  width: 100%;
`;

const WrapDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: larger;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-left: 1rem;
  border-radius: 20%;
`;
