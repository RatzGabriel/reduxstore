import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <FooterImage src={'/images/26.jpeg'} alt="" />
    </div>
  );
}

export default Footer;

const FooterImage = styled.img`
  height: 40vw;
  width: 90vw;
  border: 10px solid red;
`;
