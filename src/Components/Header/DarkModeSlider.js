import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function DarkModeSlider({ dm }) {
  return (
    <LogoDiv>
      {dm ? (
        <Brightness3Icon htmlColor="white" />
      ) : (
        <WbSunnyIcon htmlColor="white" />
      )}
    </LogoDiv>
  );
}

export default DarkModeSlider;

const LogoDiv = styled.div`
  display: flex;
  font-size: 1em;
  height: 100%;
  align-items: center;
`;
