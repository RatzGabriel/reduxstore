import React from 'react';
import styled, { css } from 'styled-components';
import One from '../../Assets/One.jpg';
import Two from '../../Assets/Two.jpg';
import Three from '../../Assets/Three.jpg';
import Four from '../../Assets/Four.jpg';

function Directory() {
  return (
    <MainWrapper>
      <QuarterDiv one>
        <A href="">Teller</A>
      </QuarterDiv>
      <QuarterDiv two>
        <A href="">Tassen</A>
      </QuarterDiv>
      <QuarterDiv three>
        <A href="">Vasen</A>
      </QuarterDiv>
      <QuarterDiv four>
        <A href="">Extras</A>
      </QuarterDiv>
    </MainWrapper>
  );
}

export default Directory;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: beige;
  height: 89vh;
`;

const QuarterDiv = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  background-size: cover;

  ${(props) =>
    props.one &&
    css`
      background-image: url(${One});
    `}
  ${(props) =>
    props.two &&
    css`
      background-image: url(${Two});
    `}
    ${(props) =>
    props.three &&
    css`
      background-image: url(${Three});
    `}
    ${(props) =>
    props.four &&
    css`
      background-image: url(${Four});
    `}
`;

const A = styled.a`
  margin: auto auto;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 400;
  background-color: white;
  padding: 10px 10px;
`;
