import React from 'react';
import styled from 'styled-components';
import LinkEement from '../Elements/LinkElement/LinkElement';

function HeaderTextComponent({ headerText, title, text, buttonText, linkTo }) {
  return (
    <TextDiv>
      {headerText && <P>{headerText}</P>}
      {title && <H1>{title}</H1>}
      {text && <p>{text}</p>}
      {buttonText && <LinkEement adress={linkTo}>{buttonText}</LinkEement>}
    </TextDiv>
  );
}

export default HeaderTextComponent;

const P = styled.p`
  color: brown;
  padding-top: 3em;
  letter-spacing: 0.2em;
`;

const H1 = styled.h1`
  font-size: 2em;
  color: 'black';
`;

const TextDiv = styled.div`
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: ${(props) => props.height || '100%'};
    width: 90%;
    align-items: center;
    padding-left: 0em;
    margin: 0 0;
  }
`;
