import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons//Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PinterestIcon from '@material-ui/icons/Pinterest';
import PaymentIcon from '@material-ui/icons/Payment';
import ContactlessIcon from '@material-ui/icons/Contactless';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

function Footer({ darkmode }) {
  const dm = darkmode;
  return (
    <DivMain color={color}>
      <DivIcons>
        <ALinks href="#">
          <FacebookIcon />
        </ALinks>
        <ALinks href="#">
          <InstagramIcon />
        </ALinks>
        <ALinks href="#">
          <MailOutlineIcon />
        </ALinks>
        <ALinks href="#">
          <PinterestIcon />
        </ALinks>
      </DivIcons>
      <DivLinks>
        <LinkElement to="#">FAQ</LinkElement>
      </DivLinks>
      <DivLinks>
        <LinkElement to="#">Shipping</LinkElement>
      </DivLinks>
      <DivLinks>
        <LinkElement to="#">Terms and Conditions</LinkElement>
      </DivLinks>
      <DivPayment>
        <PaymentIcon />
        <ContactlessIcon />
        <AccountBalanceIcon />
      </DivPayment>
      <DivDisclaimer>
        <p>Copyright 2021 Machua Peru All Rights reserved</p>
      </DivDisclaimer>
    </DivMain>
  );
}

export default Footer;

const DivDisclaimer = styled.div`
  color: white;
  margin-left: 2em;
  width: 70%;
  padding-bottom: 1em;
`;

const DivPayment = styled.div`
  color: white;
  margin-left: 2em;
  padding: 2em 0;
  width: 70%;
`;

const LinkElement = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: roboto;
  text-transform: uppercase;
`;

const DivMain = styled.div`
  background-color: ${(props) => props.color};
  height: 90vh;
  margin-top: 5em;
`;

const ALinks = styled.a`
  color: white;
  padding-right: 2em;
`;

const DivLinks = styled.div`
  margin-left: 2em;
  padding: 2em 0;
  width: 80%;
  border-bottom: 1px solid white;
`;

const DivIcons = styled.div`
  padding: 2em 0;
  margin-left: 2em;
  width: 80%;
  border-bottom: 1px solid white;
`;

const A = styled.a`
  text-decoration: none;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const ColumnTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 100%;
  align-items: center;
  width: 100%;
  @media (max-width: 962px) {
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
  @media (max-width: 962px) {
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 962px) {
    padding: 1em;
    display: none;
  }
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

// <MainDiv dm={dm}>
//   <LogoDiv>
//     <LogoImg src={'/images/Two.jpg'} alt="logo image" />
//     <ShopNameDiv>
//       <LogoTextUpper>Machua</LogoTextUpper>
//       <LogoTextLower>Peru</LogoTextLower>
//     </ShopNameDiv>
//   </LogoDiv>
//   <ColumnTextDiv>
//     <h1>Company</h1>
//     <LinkElement dm={dm} adress="/">
//       <p>Home</p>
//     </LinkElement>
//     <LinkElement dm={dm}>
//       <p>About us</p>
//     </LinkElement>
//     <LinkElement dm={dm}>Contact us</LinkElement>
//   </ColumnTextDiv>
//   <ColumnTextDiv>
//     <h1>Contact</h1>
//     <A dm={dm} href="tel:+499123456789">
//       Call Us
//     </A>
//     <A dm={dm} href="mailto:gabrielratz84@gmail.com">
//       Mail us
//     </A>
//   </ColumnTextDiv>
//   <ColumnTextDiv>
//     <h1>Adress</h1>
//     <p>Patricia Amedee </p>
//     <p>Vienna 1020</p>
//     <p>Austria</p>
//   </ColumnTextDiv>
// </MainDiv>
