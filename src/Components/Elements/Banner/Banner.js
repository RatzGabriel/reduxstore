import React from 'react';
import styled from 'styled-components';

function Banner({ src }) {
  return <BannerImg src={src} alt={'banner img'} />;
}

export default Banner;

const BannerImg = styled.img`
  height: 8rem;
  width: 100%;
  margin: 0em 0 0em 0em;
`;
