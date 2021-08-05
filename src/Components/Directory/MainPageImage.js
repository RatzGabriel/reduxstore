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
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        onClickItem={(index) =>
          history.push(`/product/${data[index].documentID}`)
        }
      >
        {data[0] !== undefined && (
          <img src={data[0].productThumbnail} alt={data[0].productName} />
        )}
        {data[1] !== undefined && (
          <img src={data[0].productThumbnail} alt={data[1].productName} />
        )}
        {data[2] !== undefined && (
          <img src={data[0].productThumbnail} alt={data[2].productName} />
        )}
      </Carousel>
    </HideOnDesktopDiv>
  );
}

export default MainPageImage;

const HideOnDesktopDiv = styled.div`
  @media (min-width: 962px) {
    display: none;
  }
`;
