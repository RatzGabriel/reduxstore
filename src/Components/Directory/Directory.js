import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Directory() {
  return (
    <MainDiv>
      <MainWrapper>
        <HalfDiv bgImage={'Two'}>
          <StyledLink to="/search/">Shop</StyledLink>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </HalfDiv>

        <HalfDiv bgImage={'Three'}>
          <StyledLink to="/search/andere">Andere</StyledLink>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </HalfDiv>
      </MainWrapper>
      <MainWrapper></MainWrapper>
      <MainWrapper>
        <HalfDiv>
          <iframe
            width="800"
            height="775"
            src="https://www.youtube.com/embed/0pt0MdReMts"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <DownArrow src={'/images/down-arrow.svg'}></DownArrow>
        </HalfDiv>
      </MainWrapper>
      <MainWrapper>
        {' '}
        <Footer />
      </MainWrapper>
    </MainDiv>
  );
}

export default Directory;

const MainDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: gray;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  overflow: hidden;
`;

const HalfDiv = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}.jpg")`};
`;

const StyledLink = styled(Link)`
  margin: auto auto;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 400;
  background-color: white;
  padding: 10px 10px;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  padding-bottom: 1rem;
`;
