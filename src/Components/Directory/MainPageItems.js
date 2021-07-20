import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
import Rosa from 'react-on-scroll-animation';

function MainPageImage({ imgUrl, buttonText, buttonTextTwo }) {
  return (
    <MainDiv imgUrl={imgUrl}>
      <TestDiv>
        <Rosa animation="zoom-out" duration={1200} anchorPlacement="top-bottom">
          <H1>Ceramic is our passion</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            maxime hic cumque molestias, eligendi doloribus eos voluptates
            soluta commodi tenetur?
          </P>
        </Rosa>
        <TestingAgain>
          <Rosa animation="fade-right" duration={2000} offset={1200}>
            <StyledLink bg="black" to="/search/">
              {buttonTextTwo}
            </StyledLink>
          </Rosa>
          <Rosa animation="fade-left" duration={2000} offset={1200}>
            <StyledLink bg="black" to="/search/">
              {buttonText}
            </StyledLink>
          </Rosa>
        </TestingAgain>
      </TestDiv>
    </MainDiv>
  );
}

export default MainPageImage;

const TestingAgain = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    display: block;
  }
`;

const H1 = styled.h1`
  font-size: 6em;
  @media (max-width: 960px) {
    font-size: 3em;
  }
`;

const P = styled.p`
  font-size: 1.3em;
  padding: 2em 0em;
`;

const TestDiv = styled.div`
  margin: auto auto;
  width: 50%;
  text-align: center;
  color: white;
  @media (max-width: 960px) {
    width: 80%;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3rem auto;
  background-image: ${(props) => `url(${props.imgUrl})`};
  height: 90vh;
  width: 100%;
  background-size: cover;
  border-radius: 0.9%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 960px) {
  }
`;

const StyledLink = styled(Link)`
  margin: auto 1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 400;
  background-color: ${(props) => props.bg || 'white'};
  color: white;
  padding: 1rem 3rem;
  font-size: 1.3em;
  &:hover {
    background-color: brown;
    color: white;
  }
  @media (max-width: 960px) {
    display: block;
    margin: 1em;
  }
`;
