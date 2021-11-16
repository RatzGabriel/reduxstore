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

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import SignedOut from './SignedOut';
import MobileMenu from './MobileMenu';
import LoggedIn from './LoggedIn';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { color } from '../../colors';
import CartMenu from './CartMenu';

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
              <ShoppingCartIcon
                statusCart={statusCart}
                onClick={() => setCart()}
              />
              <ItemCountP color={color} dm={dm} statusNavBar={statusNavBar}>
                ({totalNumCartItems})
              </ItemCountP>
            </IIcons>
          </DivIcon>
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

const DivRight = styled.div`
  display: flex;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const DivHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  @media (min-width: 962px) {
    justify-content: space-between;
    width: 50%;
    margin: 1em auto;
    border-bottom: 1px solid black;
  }
`;

const IIcons = styled.i`
  display: flex;
  margin-right: 0.5em;
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
`;

const DivLogo = styled.div``;

const DivIcon = styled.div``;

const ICart = styled.i`
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
  @media (min-width: 962px) {
    display: none;
  }
`;

const DivHeaderRight = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
  color: ${(props) => (props.color ? props.color : 'green')};
  @media (min-width: 962px) {
    justify-content: unset;
    width: unset;
  }
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.dm ? 'white' : props.color)};
  @media (min-width: 962px) {
    width: 100%;
  }
`;

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
  }
`;

const MainDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  border: none;

  background-color: ${(props) =>
    props.dm ? 'black' : props.statusNavBar ? props.color : 'white'};
  @media (min-width: 962px) {
    position: unset;
    margin: 0 auto;
  }
`;

const WrapDiv = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 962px) {
    padding: 0em;
    flex-direction: row-reverse;
    margin: 0 1.5em;
  }
  @media (min-width: 962px) {
    height: 8rem;
    width: 100%;
    margin: 0 auto;
  }
`;

const HeaderDivs = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-around;

  @media (min-width: 962px) {
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
`;
