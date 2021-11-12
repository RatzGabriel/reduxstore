import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import SwiperCore, { Pagination } from 'swiper';

import 'swiper';
import './styles.css';
SwiperCore.use([Pagination]);

function MainPageImage({ data }) {
  const history = useHistory();
  return (
    <HideOnDesktopDiv>
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        onClickItem={(index) => history.push(`/search`)}
      >
        <Div>
          {data[0] !== undefined && (
            <Img src={'/images/ceramic.jpg'} alt={data[0].productName} />
          )}
          <Link to="/search">
            <Button>
              <ButtonText>Store</ButtonText>
            </Button>
          </Link>
        </Div>
        <Div>
          {data[0] !== undefined && (
            <Img src={'/images/27.jpeg'} alt={data[0].productName} />
          )}
          <Link to="/search">
            <Button>
              <ButtonText>About Us</ButtonText>
            </Button>
          </Link>
        </Div>
      </Carousel>
    </HideOnDesktopDiv>
  );
}

export default MainPageImage;

const HideOnDesktopDiv = styled.div`
  width: 100%;
  margin-top: 4em;
  @media (min-width: 962px) {
    display: none;
  }
`;

const ButtonText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  margin: 0;
`;

const Img = styled.img`
  height: 70vh;
`;

const Div = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  width: 196px;
  height: 74px;
  left: 82px;
  top: 28rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
