import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import GoogleButton from 'react-google-button';

import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ClearIcon from '@material-ui/icons/Clear';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

function Header() {
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const [statusNavBar, setStatusNavBar] = useState(false);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const signIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <WrapDiv>
      <LogoDiv>
        <StyledLinkLogoImage to="/">
          <LogoImg src={'/images/Two.jpg'} alt="logo image" />
        </StyledLinkLogoImage>
        <ShopNameDiv>
          <LogoTextUpper>Machua</LogoTextUpper>
          <LogoTextLower>Peru</LogoTextLower>
        </ShopNameDiv>
      </LogoDiv>
      {/* <HeaderDivs>
        <NavItem itemName={'Vase'}>
          <DropdownMenu />
        </NavItem>
        <NavItem itemName={'andere'}>
          <DropdownMenu />
        </NavItem>
      </HeaderDivs> */}
      {
        <BurgerDiv>
          <BurgerDivMain onClick={() => setStatusNavBar(!statusNavBar)}>
            {!statusNavBar && <BurgerDivLine></BurgerDivLine>}
            {!statusNavBar && <BurgerDivLine></BurgerDivLine>}
            {!statusNavBar && <BurgerDivLine></BurgerDivLine>}
          </BurgerDivMain>
          <Nav>
            {statusNavBar && (
              <BurgerLinksDiv>
                <StyledMobileLinks
                  onClick={() => setStatusNavBar(false)}
                  to="/"
                >
                  <ClearIcon></ClearIcon>
                </StyledMobileLinks>
                <StyledMobileLinks
                  onClick={() => setStatusNavBar(false)}
                  to="/"
                >
                  <HomeIcon></HomeIcon>
                  Home
                </StyledMobileLinks>
                <StyledMobileLinks
                  onClick={() => setStatusNavBar(false)}
                  to="/search"
                >
                  <StorefrontIcon />
                  Shop
                </StyledMobileLinks>
                <StyledMobileLinks
                  onClick={() => setStatusNavBar(false)}
                  to="/registration"
                >
                  <VpnKeyIcon />
                  Registration
                </StyledMobileLinks>
                <StyledMobileLinks
                  onClick={() => setStatusNavBar(false)}
                  to="/cart"
                >
                  <ShoppingCartIcon />
                  Checkout
                </StyledMobileLinks>
              </BurgerLinksDiv>
            )}
          </Nav>
        </BurgerDiv>
      }
      <HeaderDivs>
        {checkUserIsAdmin(currentUser) && (
          <StyledLink to="/admin">Admin</StyledLink>
        )}
        {<StyledLink to="/search">Shop</StyledLink>}
        {!currentUser && (
          <StyledLink to="/registration">Registration</StyledLink>
        )}

        {!currentUser && <StyledLink to="/signIn">Sign In</StyledLink>}
        {!currentUser && (
          <GoogleImg src={'/images/google.png'} onClick={signIn} />
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
      </HeaderDivs>
    </WrapDiv>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

const WrapDiv = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const LogoDiv = styled.div`
  display: flex;
  font-size: 1em;
  height: 100%;
  align-items: center;
`;

const StyledLinkLogoImage = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  margin-left: 1.5rem;
`;

const LogoImg = styled.img`
  height: 60px;
  border-radius: 50%;
`;

const ShopNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  height: 50%;
`;

const LogoTextLower = styled.p`
  font-family: 'Dancing Script', cursive;
  font-weight: 800;
  color: black;
  margin: 0;
`;
const LogoTextUpper = styled.p`
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
  color: black;
  margin: 0;
`;

const HeaderDivs = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 40%;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;

const ItemCountP = styled.p`
  font-size: 10px;
`;

const GoogleImg = styled.img`
  cursor: pointer;
  height: 2rem;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    min-height: 8vh;
    font-family: 'Montserrat', sans-serif;
    z-index: 999;
    margin-top: 17em;
  }
`;

const BurgerDiv = styled.div`
  display: flex;
  z-index: 999;
`;

const StyledMobileLinks = styled(Link)`
  @media (max-width: 768px) {
    right: 0px;
    height: 3vh;
    display: flex;
    top: 8vh;
    align-items: center;
    color: white;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
    margin-top: 1em;
  }
`;

const BurgerDivMain = styled.div`
  display: none;
  margin-top: 10em;
  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerDivLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 3px;
`;

const BurgerLinksDiv = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;

    align-items: flex-start;
  }
`;
