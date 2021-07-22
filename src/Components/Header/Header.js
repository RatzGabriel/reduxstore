import React, { useState, useEffect } from 'react';
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
import { keyframes } from 'styled-components';

import { HideScroll } from 'react-hide-on-scroll';

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
    <HideScroll variant="down">
      <MainMainDiv>
        {statusNavBar && (
          <BurgerLinksDiv>
            <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/">
              <ClearIcon></ClearIcon>
            </StyledMobileLinks>
            <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/">
              <div>
                <HomeIcon></HomeIcon>
                <p>Home</p>
              </div>
            </StyledMobileLinks>
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/search"
            >
              <div>
                <StorefrontIcon />
                <p>Shop</p>
              </div>
            </StyledMobileLinks>
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/registration"
            >
              <div>
                <VpnKeyIcon />
                <p>Registration</p>
              </div>
            </StyledMobileLinks>
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/cart"
            >
              <div>
                <ShoppingCartIcon />
                <p>Cart</p>
              </div>
            </StyledMobileLinks>
          </BurgerLinksDiv>
        )}
        {
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

            <BurgerDiv>
              <BurgerDivMain onClick={() => setStatusNavBar(!statusNavBar)}>
                {!statusNavBar && <BurgerDivLine></BurgerDivLine>}
                {!statusNavBar && <BurgerDivLine></BurgerDivLine>}
                {!statusNavBar && <BurgerDivLine></BurgerDivLine>}
              </BurgerDivMain>
            </BurgerDiv>
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
        }
      </MainMainDiv>
    </HideScroll>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

const TestTiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const animation = keyframes`
  0% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}

`;

const MainMainDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  height: 10vh;
  z-index: 999;
`;

const WrapDiv = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 962px) {
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0;
    transition: top 0.6s;
    flex-direction: row-reverse;
  }
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

const BurgerDiv = styled.div`
  display: flex;
  z-index: 999;
`;

const StyledMobileLinks = styled(Link)`
  @media (max-width: 962px) {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
    padding: 2em 1em;
  }
`;

const BurgerDivMain = styled.div`
  display: none;

  @media (max-width: 962px) {
    display: block;
    padding-right: 1em;
  }
`;

const BurgerDivLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 3px;
  z-index: 999;
`;

const BurgerLinksDiv = styled.div`
  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: black;
    z-index: 999;
    position: fixed;
    width: 100%;
  }
`;

/* <HeaderDivs>
        <NavItem itemName={'Vase'}>
          <DropdownMenu />
        </NavItem>
        <NavItem itemName={'andere'}>
          <DropdownMenu />
        </NavItem>
      </HeaderDivs> */
