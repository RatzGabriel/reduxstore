import React from 'react';
import styled from 'styled-components';

const DashBoardLayout = (props) => {
  return (
    <ControlPanel>
      <div className="content">{props.children}</div>
    </ControlPanel>
  );
};

export default DashBoardLayout;

const ControlPanel = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 100%;
  padding: 13rem 0 6rem 0;
  border-bottom: 1px solid black;
  margin: 12em 0em;
`;
