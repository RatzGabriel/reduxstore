import React from 'react';
import styled from 'styled-components';
import LinkEement from '../Elements/LinkElement/LinkElement';
import { color } from '../../colors';
import { Link } from 'react-router-dom';
import ButtonElement from '../Elements/Button/Button';
function HeaderTextComponent({ headerText, title, text, buttonText, linkTo }) {
  return (
    <TextDiv>
      <BannerImg src="/images/banner1.jpeg" alt="" />
      {headerText && <P color={color}>{headerText}</P>}
      {title && <H1>{title}</H1>}
      <SmallImageDiv>
        <SmallImageRound src="/images/Two.jpg" alt="" />
        <SmallImageRound src="/images/Two.jpg" alt="" />
        <SmallImageRound src="/images/Two.jpg" alt="" />
        <SmallImageRound src="/images/Two.jpg" alt="" />
      </SmallImageDiv>

      {text && <ItemDescription>{text}</ItemDescription>}
      {buttonText && <LinkEement adress={linkTo}>{buttonText}</LinkEement>}

      <Link to="/search">
        <ButtonElement adress="search">Read More</ButtonElement>
      </Link>
    </TextDiv>
  );
}

export default HeaderTextComponent;

const BannerImg = styled.img`
  height: 10rem;
  width: 100%;
  margin: 4em 0 0em 0em;
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
  font-family: 'Jacques Francois', serif;
  width: 100%;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

const H1 = styled.h1`
  font-family: Roboto;
  font-size: 1.1rem;
  line-height: 21px;
  /* identical to box height */
  width: 100%;
  text-decoration-line: underline;
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
    margin: 1em 0 0 0em;
    text-align: left;
  }
`;

const ItemDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.5);
`;
