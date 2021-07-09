import React from 'react';
import Directory from '../../Components/Directory/Directory';
import styled from 'styled-components';

function MainPage() {
  return (
    <DivMain>
      <Directory />
    </DivMain>
  );
}

export default MainPage;

const DivMain = styled.div`
  display: flex;
`;
