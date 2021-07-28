import React from 'react';
import styled from 'styled-components';
import Button from '../Elements/Button/Button';

function HeaderTextComponent({ headerText, title, text, buttonText, linkTo }) {
  return (
    <TextDiv>
      {headerText && <P>{headerText}</P>}
      {title && <H1>{title}</H1>}
      {text && <p>{text}</p>}
      {buttonText && <Button adress={linkTo}>{buttonText}</Button>}
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: ${(props) => props.pl};
  height: ${(props) => props.height || '100%'};
  width: 90%;
  @media (max-width: 960px) {
    align-items: center;
    padding-left: 0em;
  }
`;
