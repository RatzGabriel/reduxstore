import React from 'react';
import styled from 'styled-components';

function Banner({ src }) {
  console.log(src);
  return <BannerImg src={src} alt={'banner imag'} />;
}

export default Banner;

const BannerImg = styled.img`
  height: 8rem;
  width: 100%;
  @media (max-width: 962px) {
  }
  @media (min-width: 962px) {
    display: none;
  }
`;
