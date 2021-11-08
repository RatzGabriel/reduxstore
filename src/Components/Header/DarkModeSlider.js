import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { darkMode } from '../../Redux/darkmode/darkmode';

function DarkModeSlider() {
  const [darkmode, setDarkmode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(darkMode(darkmode));
  }, [darkmode]);

  return (
    <LogoDiv>
      <label class="switch">
        <input type="checkbox" />
        <span
          onClick={() => setDarkmode(!darkmode)}
          class="slider round"
        ></span>
      </label>
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
