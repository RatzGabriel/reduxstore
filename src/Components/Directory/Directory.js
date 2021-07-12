import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import MainPageImage from './MainPageItems';

function Directory() {
  return (
    <MainDiv>
      <MainWrapper>
        <MainPageImage imgUrl={'/images/Two.jpg'} buttonText={'Shop'} />
        <MainPageImage imgUrl={'/images/26.jpeg'} buttonText={'Vasen'} />
      </MainWrapper>
      <MainWrapper>
        <HalfDiv>
          <Iframe
            src="https://www.youtube.com/embed/0pt0MdReMts"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
          <DownArrow src={'/images/down-arrow.svg'}></DownArrow>
        </HalfDiv>
      </MainWrapper>
      <MainWrapper>
        <Footer />
      </MainWrapper>
    </MainDiv>
  );
}

export default Directory;

const MainDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HalfDiv = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  padding-bottom: 1rem;
`;

const Iframe = styled.iframe`
  height: 100vh;
  width: 100%;
`;
