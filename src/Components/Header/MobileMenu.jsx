import React from 'react';
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {color} from "../../colors"
import DarkModeSlider from './DarkModeSlider';


function MobileMenu({setDarkmode,setStatusNavBar,checkUserIsAdmin,currentUser,statusNavBar,dm}) {
  
  return (
    <Nav statusNavBar={statusNavBar} dm={dm}>
   
            <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/">
              <DivInner>
                <HomeIcon></HomeIcon>
                <PTextMenu>Home</PTextMenu>
              </DivInner>
            </StyledMobileLinks>
            {checkUserIsAdmin(currentUser) && (
              <StyledMobileLinks onClick={() => setStatusNavBar(false)} to="/admin">Admin</StyledMobileLinks>
            )}
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/search"
            >
              <DivInner>
                <StorefrontIcon />
                <PTextMenu>Shop</PTextMenu>
              </DivInner>
            </StyledMobileLinks>
            <StyledMobileLinks to="/"
            >
              <DivInner onClick={()=>setDarkmode(!dm)}>
               <DarkModeSlider dm={dm}/>
                <PTextMenu> Darkmode</PTextMenu>
              </DivInner>
            </StyledMobileLinks>
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/signIn"
            >
              <DivInner>
              <VpnKeyIcon />
                <PTextMenu>Sign In</PTextMenu>
              </DivInner>
            </StyledMobileLinks>
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/wishlist"
            >
              <DivInner>
                <FavoriteBorderIcon />
                <PTextMenu>Wishlist</PTextMenu>
              </DivInner>
            </StyledMobileLinks>
            <StyledMobileLinks
              onClick={() => setStatusNavBar(false)}
              to="/cart"
            >
              <DivInner>
                <ShoppingCartIcon />
                <PTextMenu>Cart</PTextMenu>
              </DivInner>
            </StyledMobileLinks>
          </Nav>
  )
}



export default MobileMenu



const PTextMenu=styled.p`
font-family: abel;
font-size: 18px;
font-weight: lighter;
color: white;
`

const DivInner=styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid white;
width: 80%;
margin-left: 1em;
color: white;
align-items: center;
height: 1.5em;
position: relative;
`


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
 margin-top: 4em;
  @media(min-width:962px){
    display: none;
  }
`;

const StyledMobileLinks = styled(Link)`
  @media (max-width: 962px) {
   width: 100%;
   text-decoration: none;
   font-size: 2rem;
   color: white;
   font-weight: 600;
   padding: 0.5rem;
   border-radius: 3px;
  }
`;


