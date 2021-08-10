import React from 'react';

import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

function MainPageImage({ data }) {
  const history = useHistory();
  return (
    <HideOnDesktopDiv>
      <Carousel
        showArrows={false}
        showThumbs={true}
        infiniteLoop={true}
        showStatus={false}
        onClickItem={(index) =>
          history.push(`/product/${data[index].documentID}`)
        }
      >
        {data[0] !== undefined && (
          <img src={'/images/tiny1.jpg'} alt={data[0].productName} />
        )}
        {data[1] !== undefined && (
          <img src={'/images/tiny2.jpg'} alt={data[1].productName} />
        )}
        {data[2] !== undefined && (
          <img src={'/images/tiny3.jpg'} alt={data[2].productName} />
        )}
        {data[2] !== undefined && (
          <img src={'/images/tiny3.jpg'} alt={data[2].productName} />
        )}
        {data[2] !== undefined && (
          <img src={'/images/tiny3.jpg'} alt={data[2].productName} />
        )}
        {data[2] !== undefined && (
          <img src={'/images/tiny3.jpg'} alt={data[2].productName} />
        )}
      </Carousel>
    </HideOnDesktopDiv>
  );
}

export default MainPageImage;

const HideOnDesktopDiv = styled.div`
  width: 100%;
  @media (min-width: 962px) {
    display: none;
  }
`;
