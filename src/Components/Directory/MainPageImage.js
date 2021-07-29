import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

function MainPageImage({ data }) {
  const history = useHistory();
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      onClickItem={() => history.push('/search')}
    >
      <img src={data[0].productThumbnail} alt="" />
      <img src={data[1].productThumbnail} alt="" />
      <img src={data[3].productThumbnail} alt="" />
    </Carousel>
  );
}

export default MainPageImage;
