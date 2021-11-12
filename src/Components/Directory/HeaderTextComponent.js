import React from 'react';
import styled from 'styled-components';
import { color } from '../../colors';
import { Link } from 'react-router-dom';
import ButtonElement from '../Elements/Button/Button';
import Banner from '../Elements/Banner/Banner';

function HeaderTextComponent({
  headerText,
  title,
  text,
  buttonText,
  linkTo,
  imgOne,
  dm,
}) {
  return (
    <TextDiv>
      <Banner src={'/images/banner1.jpeg'} />

      {headerText && (
        <P dm={dm} color={color}>
          {headerText}
        </P>
      )}
      {title && <H1 dm={dm}>{title}</H1>}
      <SmallImageDiv>
        <SmallImageRound src={imgOne} alt="" />
        <SmallImageRound src={imgOne} alt="" />
        <SmallImageRound src={imgOne} alt="" />
      </SmallImageDiv>
      {text && <ItemDescription dm={dm}>{text}</ItemDescription>}
      <Link to={linkTo}>
        <ButtonElement margin={'3em'} adress={linkTo}>
          {buttonText}
        </ButtonElement>
      </Link>
    </TextDiv>
  );
}

export default HeaderTextComponent;

const SmallImageDiv = styled.div`
  display: flex;

  margin: 1.5em 1em;
  width: 100%;
  justify-content: space-between;
`;

const SmallImageRound = styled.img`
  height: 5rem;
`;

const P = styled.p`
  font-family: Jacques Francois;
  margin: 1em 0;
  font-size: larger;
  width: 100%;
  color: ${(props) => (props.dm ? 'white' : props.color)};
  margin: 1em 0;
`;

const H1 = styled.h1`
  font-family: Roboto;
  font-size: small;
  color: ${(props) => (props.dm ? 'white' : props.color)};
  line-height: 21px;
  /* identical to box height */
  width: 100%;
  text-decoration-line: none;

  text-align: left;
`;

const TextDiv = styled.div`
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height || '100%'};
    width: 90%;
    align-items: center;
    text-align: left;
    margin: 3em 0;
  }
`;

const ItemDescription = styled.p`
  font-size: 1.1rem;
  color: ${(props) => (props.dm ? 'white' : props.color)};
`;
