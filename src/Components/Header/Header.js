import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import GoogleButton from 'react-google-button';

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

  @media (max-width: 768px) {
    display: none;
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
