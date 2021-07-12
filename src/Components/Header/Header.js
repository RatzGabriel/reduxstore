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
      <HeaderDivs>
        <StyledLink to="/">
          <LogoImg src={'/images/Two.jpg'} alt="logo image" />
        </StyledLink>
        <StyledLink to="/">
          <LogoText>Machua Peru</LogoText>
        </StyledLink>
        <StyledLink to="/">
          <SearchIcon />
        </StyledLink>
      </HeaderDivs>
      <HeaderDivs>
        <NavItem itemName={'Vase'}>
          <DropdownMenu />
        </NavItem>
        <NavItem itemName={'andere'}>
          <DropdownMenu />
        </NavItem>
      </HeaderDivs>
      <HeaderDivs>
        {checkUserIsAdmin(currentUser) && (
          <StyledLink to="/admin">Admin</StyledLink>
        )}
        {!currentUser && (
          <StyledLink to="/registration">Registration</StyledLink>
        )}
        {!currentUser && <StyledLink to="/signIn">Sign In</StyledLink>}
        {!currentUser && <Button onClick={signIn}>Sign in with Google</Button>}
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
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderDivs = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding-right: 2rem;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-left: 1rem;
  border-radius: 20%;
`;

const ItemCountP = styled.p`
  font-size: 10px;
`;

const LogoText = styled.p`
  font-size: 1rem;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  padding-left: 3rem;
`;
