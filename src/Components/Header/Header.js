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

      <WrapDiv>
        <DivHeaderRight color={color}>
          <ICart dm={dm} color={color} statusNavBar={statusNavBar}>
            <ShoppingCartIcon
              statusCart={statusCart}
              onClick={() => setCart()}
            />
            <ItemCountP color={color} dm={dm} statusNavBar={statusNavBar}>
              ({totalNumCartItems})
            </ItemCountP>
          </ICart>
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
        </DivHeaderRight>

        <LinkLogo dm={dm} to="/">
          <LogoText color={color} dm={dm} statusNavBar={statusNavBar}>
            Machua Peru
          </LogoText>
        </LinkLogo>
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
      </WrapDiv>
    </MainDiv>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

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
    width: 0%;
  }
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.dm ? 'white' : props.color)};
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
  width: 50%;
  z-index: 999;
  border: none;
  background-color: ${(props) =>
    props.dm ? 'black' : props.statusNavBar ? props.color : 'white'};
  @media (min-width: 962px) {
    position: unset;
    width: 100%;
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
    width: 50%;
    margin: 0 auto;
  }
`;

const HeaderDivs = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
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
  padding-right: 1em;
  color: ${(props) =>
    props.dm ? 'white' : props.statusNavBar ? 'white' : 'black'};
`;
