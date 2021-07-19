import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

function MainPageImage({ imgUrl, buttonText }) {
  return (
    <MainDiv imgUrl={imgUrl}>
      <TestDiv>
        <H1>Ceramic is our passion</H1>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime
          hic cumque molestias, eligendi doloribus eos voluptates soluta commodi
          tenetur?
        </P>
        <StyledLink to="/search/">{buttonText}</StyledLink>
      </TestDiv>
    </MainDiv>
  );
}

export default MainPageImage;

const animation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

`;

const H1 = styled.h1`
  font-size: 6em;
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
  animation-name: ${animation};
  animation-duration: 1s;
  animation-iteration-count: 1;
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
`;

const StyledLink = styled(Link)`
  margin: auto auto;
  text-decoration: none;
  color: brown;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 400;
  background-color: white;
  padding: 1rem 1rem;
  border-radius: 5%;
  font-size: 1.3em;
  &:hover {
    background-color: brown;
    color: white;
  }
`;
