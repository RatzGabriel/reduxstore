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
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { color } from '../../colors';
import CartMenu from './CartMenu';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
  darkmodefromState: state.darkmode,
});

function Header() {
  const { currentUser, totalNumCartItems, darkmodefromState } =
    useSelector(mapState);

  const [darkmode, setDarkmode] = useState(false);

  const [statusNavBar, setStatusNavBar] = useState(false);
  const [statusCart, setStatusCart] = useState(false);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const signIn = () => {
    dispatch(googleSignInStart());
  };

  useEffect(() => {
    setDarkmode(darkmodefromState.darkmode);
  }, [darkmodefromState]);

  return (
    <MainDiv color={color} dm={darkmode}>
      <MobileMenu
        setStatusNavBar={setStatusNavBar}
        checkUserIsAdmin={checkUserIsAdmin}
        currentUser={currentUser}
        statusNavBar={statusNavBar}
        dm={darkmode}
      />
      <CartMenu
        setStatusNavBar={setStatusCart}
        checkUserIsAdmin={checkUserIsAdmin}
        currentUser={currentUser}
        statusNavBar={statusCart}
        dm={darkmode}
      />

      <WrapDiv>
        <DivHeaderRight>
          <ShoppingCartIcon
            statusCart={statusCart}
            onClick={() => setStatusCart(!statusCart)}
          />
          <Iopen
            statusNavBar={statusNavBar}
            onClick={() => setStatusNavBar(!statusNavBar)}
            dm={darkmode}
          >
            <CloseIcon />
          </Iopen>
          <Iclosed
            statusNavBar={statusNavBar}
            onClick={() => setStatusNavBar(!statusNavBar)}
            dm={darkmode}
          >
            <MenuIcon />
          </Iclosed>
        </DivHeaderRight>

        <LinkLogo dm={darkmode} to="/">
          <LogoText>Machua Peru</LogoText>
        </LinkLogo>
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
    </MainDiv>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;

const DivHeaderRight = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const Iclosed = styled.i`
  display: ${(props) => (props.statusNavBar ? 'none' : 'block')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const Iopen = styled.i`
  display: ${(props) => (props.statusNavBar ? 'block' : 'none')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const LogoText = styled.p`
  font-family: rochester;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  margin: 0;
`;

const MainDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  border: none;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
`;

const WrapDiv = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 962px) {
    padding: 0px 0em;
    flex-direction: row-reverse;
    margin: 0 1.5em;
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
`;
