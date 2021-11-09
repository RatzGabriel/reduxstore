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
}) {
  return (
    <TextDiv>
      <Banner src={'/images/banner1.jpeg'} />

      {headerText && <P color={color}>{headerText}</P>}
      {title && <H1>{title}</H1>}
      <SmallImageDiv>
        <SmallImageRound src={imgOne} alt="" />
        <SmallImageRound src={imgOne} alt="" />
        <SmallImageRound src={imgOne} alt="" />
        <SmallImageRound src={imgOne} alt="" />
      </SmallImageDiv>
      {text && <ItemDescription>{text}</ItemDescription>}
      <Link to={linkTo}>
        <ButtonElement margin={'3em'} adress={linkTo}>
          {buttonText}
        </ButtonElement>
      </Link>
    </TextDiv>
  );
}

export default HeaderTextComponent;

const H1Title = styled.h1`
  font-family: Jacques Francois;
  margin: 1em 0;
  font-size: large;
`;

const BannerImg = styled.img`
  height: 8rem;
  width: 100%;
  margin: 0em 0 0em 0em;
`;

const SmallImageDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 1.5em 0;
`;

const SmallImageRound = styled.img`
  border-radius: 50%;
  width: 3.438rem;
  height: 3.25rem;
  margin-right: 2em;
`;

const P = styled.p`
  font-family: Jacques Francois;
  margin: 1em 0;
  font-size: larger;
  width: 100%;
  color: ${(props) => props.color};
  margin: 1em 0;
`;

const H1 = styled.h1`
  font-family: Roboto;
  font-size: small;

  line-height: 21px;
  /* identical to box height */
  width: 100%;
  text-decoration-line: none;
  color: rgba(0, 0, 0, 0.5);
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
  color: rgba(0, 0, 0, 0.5);
`;
