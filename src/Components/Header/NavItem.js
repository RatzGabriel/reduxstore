import React, { useState } from 'react';
import styled from 'styled-components';

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <Li onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
      {props.itemName}
      {open && props.children}
    </Li>
  );
}

export default NavItem;

const Li = styled.li`
  list-style: none;
  text-decoration: none;
  display: flex;
  width: 5rem;
`;
