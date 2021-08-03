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

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import SignedOut from './SignedOut';
import MobileMenu from './MobileMenu';
import LoggedIn from './LoggedIn';

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
    <MainMainDiv>
      {statusNavBar && (
        <MobileMenu
          setStatusNavBar={setStatusNavBar}
          checkUserIsAdmin={checkUserIsAdmin}
          currentUser={currentUser}
        />
      )}
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

/* <HeaderDivs>
        <NavItem itemName={'Vase'}>
          <DropdownMenu />
        </NavItem>
        <NavItem itemName={'andere'}>
          <DropdownMenu />
        </NavItem>
      </HeaderDivs> */
