import React from 'react';
import styled from "styled-components";
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function MobileMenu({setStatusNavBar,checkUserIsAdmin,currentUser}) {
  return (
    <BurgerLinksDiv>
            <StyledMobileLinks onClick={() => setStatusNavBar(false)}>
              <ClearIcon></ClearIcon>
            </StyledMobileLinks>
            <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/">
              <div>
                <HomeIcon></HomeIcon>
                <p>Home</p>
              </div>
            </StyledMobileLinks>
            {checkUserIsAdmin(currentUser) && (
              <StyledMobileLinks to="/admin">Admin</StyledMobileLinks>
            )}
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
              to="/wishlist"
            >
              <div>
                <FavoriteBorderIcon />
                <p>Wishlist</p>
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
  )
}

export default MobileMenu


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
