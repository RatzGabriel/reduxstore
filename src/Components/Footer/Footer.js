import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MainDiv>
      <LogoDiv>
        <LogoImg src={'/images/Two.jpg'} alt="logo image" />
        <ShopNameDiv>
          <LogoTextUpper>Machua</LogoTextUpper>
          <LogoTextLower>Peru</LogoTextLower>
        </ShopNameDiv>
      </LogoDiv>
      <ColumnTextDiv>
        <h1>Company</h1>
        <LinkElement adress="/">
          <p>Home</p>
        </LinkElement>
        <LinkElement>
          <p>About us</p>
        </LinkElement>
        <LinkElement>Contact us</LinkElement>
      </ColumnTextDiv>
      <ColumnTextDiv>
        <h1>Contact</h1>
        <A href="tel:+499123456789">Call Us</A>
        <A href="mailto:gabrielratz84@gmail.com">Mail us</A>
      </ColumnTextDiv>
      <ColumnTextDiv>
        <h1>Adress</h1>
        <p>Patricia Amedee </p>
        <p>Vienna 1020</p>
        <p>Austria</p>
      </ColumnTextDiv>
    </MainDiv>
  );
}

export default Footer;

const A = styled.a`
  text-decoration: none;
  color: brown;
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

const LinkElement = styled(Link)`
  text-decoration: none;
  color: black;
`;
