import React from 'react';
import Four from '../../Assets/Four.jpg';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

function DropdownMenu(props) {
  function DropdownItem(props) {
    return <AItem href="">{props.children}</AItem>;
  }

  return (
    <DropDown>
      <FadeIn delay={100} transitionDuration={800}>
        <DropDownDiv>
          <DropdownItem>Item One </DropdownItem>
          <DropdownImage src={Four} alt="" />
        </DropDownDiv>
        <DropDownDiv>
          <DropdownItem>Item One </DropdownItem>
          <DropdownImage src={Four} alt="" />
        </DropDownDiv>
        <DropDownDiv>
          <DropdownItem>Item One </DropdownItem>
          <DropdownImage src={Four} alt="" />
        </DropDownDiv>
      </FadeIn>
    </DropDown>
  );
}

export default DropdownMenu;

const DropdownImage = styled.img`
  width: 5rem;
`;

const DropDownDiv = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  align-items: center;
`;

const DropDown = styled.div`
  position: absolute;
  transform: translateY(20%);
  width: 30rem;
`;

const AItem = styled.a`
  text-decoration: none;
  color: black;
  padding: 1rem;
  width: 50%;
`;
