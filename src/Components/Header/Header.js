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

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import SignedOut from './SignedOut';
import MobileMenu from './MobileMenu';
import LoggedIn from './LoggedIn';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { color } from '../../colors';
import CartMenu from './CartMenu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

function Header({ setDarkmodeOnApp, dm }) {
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const [statusNavBar, setStatusNavBar] = useState(false);
  const [statusCart, setStatusCart] = useState(false);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const signIn = () => {
    dispatch(googleSignInStart());
  };

  function setCart() {
    if (statusNavBar === true) {
      setStatusNavBar(false);
      setStatusCart(true);
    } else if (statusCart === true) setStatusCart(false);
    else setStatusCart(true);
  }

  function setMenu() {
    if (statusCart === true) {
      setStatusCart(false);
      setStatusNavBar(true);
    } else setStatusNavBar(!statusNavBar);
  }

  return (
    <MainDiv color={color} dm={dm} statusNavBar={statusNavBar}>
      <MobileMenu
        setStatusNavBar={setStatusNavBar}
        checkUserIsAdmin={checkUserIsAdmin}
        currentUser={currentUser}
        statusNavBar={statusNavBar}
        dm={dm}
        setDarkmode={setDarkmodeOnApp}
      />
      <CartMenu
        setStatusCart={setStatusCart}
        checkUserIsAdmin={checkUserIsAdmin}
        currentUser={currentUser}
        statusCart={statusCart}
        dm={dm}
      />
      <DivHeaderMobile>
        <div>
          <LinkStyled dm={dm} to="/">
            <LogoText dm={dm} statusNavBar={statusNavBar}>
              Machua Peru
            </LogoText>
          </LinkStyled>
        </div>
        <DivMiddleHeader>
          <LinkDesktopHeader to="/store">Store</LinkDesktopHeader>
          <LinkDesktopHeader to="/about">About</LinkDesktopHeader>
          <LinkDesktopHeader to="/wishlist">Wishlist</LinkDesktopHeader>
        </DivMiddleHeader>
        <div>
          <StyledLink to="/cart">
            <ShoppingCartIcon color={'primary'} />
            <ItemCountP statusNavBar={statusNavBar}>
              ({totalNumCartItems})
            </ItemCountP>
          </StyledLink>
        </div>
      </DivHeaderMobile>
      <DivHeader>
        <DivLogo>
          <LinkStyled dm={dm} to="/">
            <LogoText color={color} dm={dm} statusNavBar={statusNavBar}>
              Machua Peru
            </LogoText>
          </LinkStyled>
        </DivLogo>

        <DivRight>
          <DivIcon>
            <IIcons dm={dm} color={color} statusNavBar={statusNavBar}>
              <ShoppingCartIcon onClick={() => setCart()} />
              <ItemCountP color={color} dm={dm} statusNavBar={statusNavBar}>
                ({totalNumCartItems})
              </ItemCountP>
            </IIcons>
          </DivIcon>
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <Iopen
            statusNavBar={statusNavBar}
            color={color}
            onClick={() => setMenu()}
            dm={dm}
          >
            <CloseIcon />
          </Iopen>
          <Iclosed
            statusNavBar={statusNavBar}
            color={color}
            onClick={() => setMenu()}
            dm={dm}
          >
            <MenuIcon />
          </Iclosed>
        </DivRight>
        <HeaderDivs>
          {checkUserIsAdmin(currentUser) && (
            <StyledLink to="/admin">Admin</StyledLink>
          )}

          {!currentUser && <SignedOut signIn={signIn} />}
          {currentUser && <LoggedIn signOut={signOut} />}
          <StyledLink to="/cart">
            <ShoppingCartIcon />
            <ItemCountP statusNavBar={statusNavBar}>
              ({totalNumCartItems})
            </ItemCountP>
          </StyledLink>
        </HeaderDivs>
      </DivHeader>
    </MainDiv>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

const DivMiddleHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`;

const LinkDesktopHeader = styled(Link)`
  text-decoration: none;
  color: white;
`;

const DivHeaderMobile = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 2em 0;
  @media (max-width: 962px) {
    display: none;
  }
`;

const DivRight = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  @media (max-width: 962px) {
    width: 70%;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const DivHeader = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 962px) {
    display: none;
  }
`;

const IIcons = styled.i`
  display: flex;

  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
  @media (min-width: 962px) {
    display: none;
  }
`;

const DivLogo = styled.div`
  width: 50%;

  @media (max-width: 962px) {
    width: 90%;
  }
`;

const DivIcon = styled.div``;

const Iclosed = styled.i`
  display: ${(props) => (props.statusNavBar ? 'none' : 'block')};
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
  @media (min-width: 962px) {
    display: none;
  }
`;

const Iopen = styled.i`
  display: ${(props) => (props.statusNavBar ? 'block' : 'none')};
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
`;

const LogoText = styled.p`
  font-family: rochester;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  margin: 0;
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
  @media (min-width: 962px) {
    font-size: 2em;
    width: 5em;
    color: white;
  }
`;

const MainDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  border: none;
  top: 0;
  background-color: ${(props) =>
    props.dm ? 'black' : props.statusNavBar ? props.color : 'white'};
  @media (min-width: 962px) {
    margin: 0 auto;
    background-color: unset;
  }
`;

const HeaderDivs = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;

  @media (max-width: 962px) {
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
  padding-right: 1em;
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
  @media (min-width: 962px) {
    color: white;
  }
`;
