import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

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
        <p>Home</p>
        <p>About us</p>
        <a href="mailto:abc@example.com">Contact us</a>
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
const animation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

`;

const ColumnTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  animation-name: ${animation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  @media (max-width: 962px) {
    padding: 1em;
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 2em;

  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 962px) {
    padding: 1em;
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
  animation-name: ${animation};
  animation-duration: 1s;
  animation-iteration-count: 1;
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
