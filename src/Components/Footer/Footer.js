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
      <div>
        <h1>Company</h1>
        <p>Home</p>
        <p>About us</p>
        <p>Contact us</p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>+6605685648</p>
        <p>pati@gmx.at</p>
      </div>
      <div>
        <h1>Adress</h1>
        <p>Patricia Amedee </p>
        <p>Vienna 1020</p>
        <p>Austria</p>
      </div>
    </MainDiv>
  );
}

export default Footer;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
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
