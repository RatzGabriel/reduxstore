import React, { useState } from 'react';
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
//Material Imports
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';

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
        <LeftDiv>
          <Link to="/">
            <LogoImg src={testLogo} alt="logo image" />
          </Link>
          <LogoText>Machua Peru</LogoText>
        </LeftDiv>
        <WrapDiv>
          <div>
            <WrapDiv>
              <SearchIcon />
              <NavItem itemName={'Vase'}>
                <DropdownMenu />
              </NavItem>
              <NavItem itemName={'andere'}>
                <DropdownMenu />
              </NavItem>
              <NavItem itemName={'more'}>
                <DropdownMenu />
              </NavItem>
            </WrapDiv>
          </div>
        </WrapDiv>
        <MediumDiv>
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
          {currentUser && (
            <StyledLink to="/payment">
              <EuroSymbolIcon />
            </StyledLink>
          )}
          {/* {currentUser && <StyledLink to="/dashboard">Dashboard</StyledLink>} */}
          <StyledLink to="/cart">
            <ShoppingCartIcon />
            <ItemCountP>({totalNumCartItems})</ItemCountP>
          </StyledLink>
          {currentUser && (
            <StyledLink onClick={() => signOut()}>Logout</StyledLink>
          )}
        </MediumDiv>
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
  height: 5rem;
  background-color: white;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid black;
`;

const WrapDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

const MediumDiv = styled.div`
  display: flex;
`;

const LeftDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding-right: 2rem;
  display: flex;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-left: 1rem;
  border-radius: 20%;
`;

const ItemCountP = styled.p`
  font-size: 10px;
`;

const CategoryP = styled.p`
  padding: 1rem 1rem;

  &:hover {
    filter: brightness(1.2);
    background-color: black;
    color: white;
  }
`;

const LogoText = styled.p`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
`;
