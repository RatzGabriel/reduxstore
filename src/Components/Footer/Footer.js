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

function Footer({ dm }) {
  return (
    <DivMain color={color} dm={dm}>
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
        <P>Copyright 2021 Machua Peru All Rights reserved</P>
      </DivDisclaimer>
    </DivMain>
  );
}

export default Footer;

const P = styled.p`
  color: white;
`;

const DivDisclaimer = styled.div`
  color: white;
  margin-left: 2em;
  width: 70%;
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
  background-color: ${(props) => (props.dm ? 'black' : props.color)};
  height: 80vh;
  width: 100%;
  @media (min-width: 962px) {
    width: 90%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
