import React from 'react';
import Rosa from 'react-on-scroll-animation';
import styled from 'styled-components';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import FaceIcon from '@material-ui/icons/Face';

function InformationText() {
  return (
    <TextDiv>
      <First>
        <InnerDiv>
          <h1>Our Product</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form .
          </p>
        </InnerDiv>
        <SmallDiv>
          <MoveToInboxIcon fontSize={'inherit'} />
        </SmallDiv>
      </First>
      <First>
        <InnerDiv>
          <h1>Our Services</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form .
          </p>
        </InnerDiv>
        <SmallDiv>
          <InsertEmoticonIcon fontSize={'inherit'} />
        </SmallDiv>
      </First>
      <First>
        <InnerDiv>
          <h1>Our Product</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form .
          </p>
        </InnerDiv>
        <SmallDiv>
          <FaceIcon fontSize={'inherit'} />
        </SmallDiv>
      </First>
    </TextDiv>
  );
}

export default InformationText;

const First = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em;
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
`;

const InnerDiv = styled.div`
  padding: 0em 0;
  justify-content: flex-start;
`;

const TextDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: ${(props) => props.pl};
  height: ${(props) => props.height || '100%'};
  width: 100%;
  margin: 3em 0 0 0;
  flex-direction: column;
  @media (max-width: 960px) {
    width: 100%;
    align-items: flex-start;
    text-align: center;
  }
`;
