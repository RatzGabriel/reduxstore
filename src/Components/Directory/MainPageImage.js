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
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        onClickItem={(index) => history.push(`/search`)}
      >
        {data[0] !== undefined && (
          <Div src={'/images/ceramic.jpg'}>
            <LinkButton to="/search">
              <Button>
                <ButtonText>Store</ButtonText>
              </Button>
            </LinkButton>
          </Div>
        )}
        {data[0] !== undefined && (
          <Div src={'/images/27.jpeg'}>
            <LinkButton to="/search">
              <Button>
                <ButtonText>About Me</ButtonText>
              </Button>
            </LinkButton>
          </Div>
        )}
      </Carousel>
    </HideOnDesktopDiv>
  );
}

export default MainPageImage;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

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

const Div = styled.div`
  background-image: url(${(props) => props.src});
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const Button = styled.button`
  width: 15rem;
  height: 74px;
  bottom: 3em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
