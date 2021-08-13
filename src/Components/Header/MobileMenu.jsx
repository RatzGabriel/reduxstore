import React from 'react';
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {color} from "../../colors"



function MobileMenu({setStatusNavBar,checkUserIsAdmin,currentUser,statusNavBar,dm}) {
  
  return (
    <Nav statusNavBar={statusNavBar} dm={dm.darkmode}>
            <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/">
              <div>
                <HomeIcon></HomeIcon>
                <p>Home</p>
              </div>
            </StyledMobileLinks>
            {checkUserIsAdmin(currentUser) && (
              <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/admin">Admin</StyledMobileLinks>
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
              to="/signIn"
            >
              <div>
              <VpnKeyIcon />
                <p>Sign In</p>
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
          </Nav>
  )
}

export default MobileMenu


const Nav = styled.nav`
 transition: opacity 0.75s, visibility 0.75s, width 0.75s;
 z-index:1;
 width: ${props=>props.statusNavBar?"100%":"30%"};
 display: flex;
 flex-direction: column;
 background-color: ${props=>props.dm?"black":color};
 align-items: center;
 justify-content: center;
 position: fixed;
 opacity:${props=>props.statusNavBar?"1":"0"} ;
 visibility: ${props=>props.statusNavBar?"visible":"hidden"};
 height: ${props=>props.statusNavBar?'100vh':"100vh"};
 overflow: hidden;
 top: 10vh;
  @media(min-width:962px){
    display: none;
  }
`;

const StyledMobileLinks = styled(Link)`
  @media (max-width: 962px) {
   width: 100%;
   text-align: center;
   text-decoration: none;
   font-size: 2rem;
   color: white;
   font-weight: 600;
   padding: 0.5rem;
   border-radius: 3px;
   margin: 0 0.5rem;
  }
`;


