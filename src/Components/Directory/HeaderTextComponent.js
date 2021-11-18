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
  imgTwo,
  imgThree,
  dm,
  imgBanner,
}) {
  return (
    <TextDiv>
      <Banner src={imgBanner} />

      {headerText && (
        <P dm={dm} color={color}>
          {headerText}
        </P>
      )}
      {title && <H1 dm={dm}>{title}</H1>}
      <SmallImageDiv>
        <SmallImage src={imgOne} alt="" />
        <SmallImage src={imgTwo} alt="" />
        <SmallImage src={imgThree} alt="" />
      </SmallImageDiv>
      {text && <ItemDescription dm={dm}>{text}</ItemDescription>}
      <LinkElement to={linkTo || '/'}>
        <ButtonElement margin={'3em'} adress={linkTo}>
          {buttonText}
        </ButtonElement>
      </LinkElement>
    </TextDiv>
  );
}

export default HeaderTextComponent;

const LinkElement = styled(Link)`
  @media (min-width: 962px) {
    display: none;
  }
`;

const SmallImageDiv = styled.div`
  display: flex;
  margin: 1.5em 1em;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 962px) {
    width: 100%;
    margin: 0;
  }
`;

const SmallImage = styled.img`
  width: 25rem;
  height: 30rem;
  @media (max-width: 962px) {
    width: 5em;
    height: 5em;
    top: 0;
  }
`;

const P = styled.p`
  font-family: Jacques Francois;
  margin: 1em 0;
  font-size: larger;
  width: 100%;
  color: ${(props) => (props.dm ? 'white' : props.color)};
  margin: 1em 0;
  @media (min-width: 962px) {
    font-size: 4.558rem;
  }
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
  @media (min-width: 962px) {
    font-size: 1.558rem;
    margin: 4em 0;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`;

const TextDiv = styled.div`
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height || '100%'};
    width: 90%;
    align-items: center;
    text-align: left;
    margin: 3em auto;
  }
  @media (min-width: 960px) {
    align-items: left;
    text-align: center;

    width: 100%;
  }
`;

const ItemDescription = styled.p`
  font-size: 1.1rem;
  color: ${(props) => (props.dm ? 'white' : props.color)};
  @media (min-width: 962px) {
    display: none;
  }
`;
