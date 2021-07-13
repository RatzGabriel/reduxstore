import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MainPageImage({ imgUrl, buttonText }) {
  return (
    <MainDiv imgUrl={imgUrl}>
      <StyledLink to="/search/">{buttonText}</StyledLink>
      <DownArrow src={'/images/down-arrow.svg'}></DownArrow>
    </MainDiv>
  );
}

export default MainPageImage;

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

const DownArrow = styled.img`
  position: absolute;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  padding-bottom: 1rem;
  bottom: 0;
  left: 50%;
`;

const StyledLink = styled(Link)`
  margin: auto auto;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 400;
  background-color: white;
  padding: 1rem 1rem;
`;
