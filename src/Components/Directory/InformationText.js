import React from 'react';
import Rosa from 'react-on-scroll-animation';
import styled from 'styled-components';

function InformationText() {
  return (
    <TextDiv>
      <Rosa animation="fade-up" duration={400} once>
        <h1>Our Customer</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form .
        </p>
      </Rosa>
      <Rosa
        animation="fade-up"
        duration={600}
        anchorPlacement={'top-center'}
        offset={600}
        once
      >
        <h1>Our Product</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form .
        </p>
      </Rosa>
      <Rosa
        animation="fade-up"
        duration={800}
        anchorPlacement={'top-center'}
        offset={600}
        once
      >
        <h1>Our Services</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form{' '}
        </p>
      </Rosa>
    </TextDiv>
  );
}

export default InformationText;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-left: ${(props) => props.pl};
  height: ${(props) => props.height || '100%'};
  width: 40%;
  @media (max-width: 960px) {
    margin: 2em;
    width: 100%;
    align-items: flex-start;
    text-align: center;
    padding-left: 0em;
  }
`;
