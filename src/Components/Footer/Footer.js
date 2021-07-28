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
        <p>Tel: +6605685648</p>
        <p>Email: pati@gmx.at</p>
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

const ColumnTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 962px) {
    padding: 1em;
  }
`;

const MainDiv = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 962px) {
    justify-content: space-around;
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
`;
