import React from 'react';

import styled from 'styled-components';
import FadeIn from 'react-fade-in';

function DropdownMenu(props) {
  function DropdownItem(props) {
    return <AItem href="">{props.children}</AItem>;
  }

  return (
    <DropDown>
      <FadeIn delay={0} transitionDuration={400}>
        <DropDownDiv>
          <DropdownItem>Item One </DropdownItem>
          <DropdownImage src={'/images/Four.jpg'} alt="" />
          <DropdownImage src={'/images/Four.jpg'} alt="" />
        </DropDownDiv>
        <DropDownDiv>
          <DropdownItem>Item One </DropdownItem>
          <DropdownImage src={'/images/Four.jpg'} alt="" />
          <DropdownImage src={'/images/Four.jpg'} alt="" />
        </DropDownDiv>
        <DropDownDiv>
          <DropdownItem>Item One </DropdownItem>
          <DropdownImage src={'/images/Four.jpg'} alt="" />
          <DropdownImage src={'/images/Four.jpg'} alt="" />
        </DropDownDiv>
      </FadeIn>
    </DropDown>
  );
}

export default DropdownMenu;

const DropdownImage = styled.img`
  width: 10rem;
  height: 12rem;
  padding: 1rem 1rem;
  cursor: pointer;
`;

const DropDownDiv = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  align-items: center;
`;

const DropDown = styled.div`
  position: absolute;
  transform: translateY(3%);
  width: 40rem;
`;

const AItem = styled.a`
  text-decoration: none;
  color: black;
  padding: 1rem;
  width: 50%;
`;
