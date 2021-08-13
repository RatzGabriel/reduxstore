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

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import SignedOut from './SignedOut';
import MobileMenu from './MobileMenu';
import LoggedIn from './LoggedIn';
import { darkMode } from '../../Redux/darkmode/darkmode';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
  darkmodefromState: state.darkmode,
});

function Header() {
  const { currentUser, totalNumCartItems, darkmodefromState } =
    useSelector(mapState);

  const [statusNavBar, setStatusNavBar] = useState(false);
  const dispatch = useDispatch();
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    dispatch(darkMode(darkmode));
  }, [darkmode]);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const signIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <MainMainDiv dm={darkmode}>
      <MobileMenu
        setStatusNavBar={setStatusNavBar}
        checkUserIsAdmin={checkUserIsAdmin}
        currentUser={currentUser}
        statusNavBar={statusNavBar}
        dm={darkmodefromState}
      />
      <WrapDiv>
        <LogoDiv>
          <label class="switch">
            <input type="checkbox" />
            <span onClick={() => setDarkmode(!darkmode)} class="slider"></span>
          </label>

          <StyledLinkLogoImage to="/">
            <LogoImg src={'/images/Two.jpg'} alt="logo image" />
          </StyledLinkLogoImage>
          <ShopNameDiv>
            <LogoTextUpper dm={darkmode}>Machua</LogoTextUpper>
            <LogoTextLower dm={darkmode}>Peru</LogoTextLower>
          </ShopNameDiv>
        </LogoDiv>
        <BurgerDiv>
          <BurgerDivMain onClick={() => setStatusNavBar(!statusNavBar)}>
            <BarOne dm={darkmode} statusNavBar={statusNavBar}></BarOne>
            <BarTwo dm={darkmode} statusNavBar={statusNavBar}></BarTwo>
            <BarThree dm={darkmode} statusNavBar={statusNavBar}></BarThree>
          </BurgerDivMain>
        </BurgerDiv>
        <HeaderDivs>
          {checkUserIsAdmin(currentUser) && (
            <StyledLink to="/admin">Admin</StyledLink>
          )}
          {<StyledLink to="/search">Shop</StyledLink>}
          {!currentUser && <SignedOut signIn={signIn} />}

          {currentUser && <LoggedIn signOut={signOut} />}
          {/* {currentUser && <StyledLink to="/dashboard">Dashboard</StyledLink>} */}
          <StyledLink to="/cart">
            <ShoppingCartIcon />
            <ItemCountP>({totalNumCartItems})</ItemCountP>
          </StyledLink>
        </HeaderDivs>
      </WrapDiv>
    </MainMainDiv>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

const BarOne = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${(props) => (props.dm ? 'white' : '#333b54')};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  transform: ${(props) => (props.statusNavBar ? 'rotate(45deg)' : 'rotate(0)')};
`;
const BarTwo = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${(props) => (props.dm ? 'white' : '#333b54')};

  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  opacity: ${(props) => (props.statusNavBar ? '0' : 1)};
  transform: ${(props) =>
    props.statusNavBar ? 'translateX(20px)' : 'translateX(0)'};
`;
const BarThree = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${(props) => (props.dm ? 'white' : '#333b54')};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  transform: ${(props) =>
    props.statusNavBar ? 'rotate(-45deg)' : 'rotate(0)'};
`;

const MainMainDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: white;
  height: 10vh;
  z-index: 999;
  border: none;
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
  color: ${(props) => (props.dm ? 'white' : 'black')};
  margin: 0;
`;
const LogoTextUpper = styled.p`
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
  color: ${(props) => (props.dm ? 'white' : 'black')};
  margin: 0;
`;

const HeaderDivs = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 50%;
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

const BurgerDiv = styled.div`
  display: flex;
  z-index: 999;
  @media (min-width: 962px) {
    display: none;
  }
`;

const BurgerDivMain = styled.div`
  display: none;
  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    padding: 0;
    top: 20px;
  }
`;
