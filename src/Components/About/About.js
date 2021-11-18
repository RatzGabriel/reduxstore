import React from 'react';
import styled from 'styled-components';
import { color } from '../../colors';

function About() {
  return (
    <DivMain color={color}>
      <DivInner>
        <H1>About Me</H1>
        <Img src="/images/Musk.jpg" alt="" />
        <P>
          I am a Man with Passion and Money.And Money.And Money.And Money. But i
          need more Money.Please buy my Stocks
        </P>
      </DivInner>
    </DivMain>
  );
}

export default About;

const P = styled.p`
  color: white;
`;

const Img = styled.img`
  height: 20em;
  padding: 3em 0;
`;

const H1 = styled.h1`
  color: white;
`;

const DivInner = styled.div`
  width: 90%;
  padding-top: 10em;
  padding-bottom: 10em;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivMain = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.color};
`;
