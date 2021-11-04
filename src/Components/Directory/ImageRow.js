import React from 'react';
import styled from 'styled-components';

function ImageRow() {
  return (
    <ImageRowDiv>
      <SmallDiv>
        <Img src={'/images/Two.jpg'} alt="" />
      </SmallDiv>
      <SmallDiv>
        <Img pt={'7em'} src={'/images/Two.jpg'} alt="" />
      </SmallDiv>
      <SmallDiv>
        <Img src={'/images/5.jpeg'} alt="" />
      </SmallDiv>
    </ImageRowDiv>
  );
}

export default ImageRow;

const ImageRowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2em 0;
  @media (max-width: 962px) {
    padding: 0;
  }
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: 20%;

  @media (max-width: 960px) {
    display: none;
  }
`;
const Img = styled.img`
  height: ${(props) => props.height || '60%'};
  margin-top: ${(props) => props.pt || 0};
  width: 100%;
  padding: 0em 1em;
  @media (max-width: 960px) {
    padding-bottom: 1em;
    margin-top: 0;
  }
`;
