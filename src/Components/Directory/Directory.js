import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'react-on-scroll-animation/build/index.css';

import InformationText from './InformationText';
import ProductComponent from '../ProductsResults/Product/ProductComponent';
import HeaderTextComponent from './HeaderTextComponent';
import MainPageImage from './MainPageImage';
import ButtonElement from '../Elements/Button/Button';
import { color } from '../../colors';
import ImageRow from './ImageRow';
import Bestseller from './Bestseller';
import Footer from '../Footer/Footer';

import ReactPageScroller from 'react-page-scroller';

const mapState = ({ productsData, darkmode }) => ({
  products: productsData.products,
  darkmodefromState: darkmode,
});

function Directory() {
  const { products, darkmodefromState } = useSelector(mapState);
  const dispatch = useDispatch();
  const darkmode = darkmodefromState.darkmode;

  useEffect(() => {
    dispatch(fetchProductsStart({ bestseller: 'bestseller' }));
  }, []);

  const { data } = products;

  return (
    <MainDiv dm={darkmode}>
      <MainWrapper>
        <ReactPageScroller>
          {Array.isArray(data) && data.length > 0 && (
            <MainPageImage data={data} />
          )}
          <MiddleDiv>
            <HeaderTextComponent
              headerText="Our Service"
              title="We produce tiny Ceramic items"
              text=" In a world getting bigger and bigger Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci emque ad.  ."
              imgOne="/images/Two.jpg"
              buttonText="Read Moore"
              linkTo="search"
            />
            <ImageRow />
          </MiddleDiv>
          <BestSellerDiv dm={darkmode}>
            <Bestseller />
          </BestSellerDiv>
          <MiddleDiv>
            <HeaderTextComponent
              title="Meet The Minds Shaping An Industry"
              headerText="Our Team"
              imgOne="/images/buffett.jpeg"
              buttonText="Read More"
              text="  There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form ."
            />
          </MiddleDiv>
          <HalfDiv>
            <Iframe
              src="https://www.youtube.com/embed/0pt0MdReMts"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></Iframe>
          </HalfDiv>
          <Footer darkmode={darkmode} />
        </ReactPageScroller>
      </MainWrapper>
    </MainDiv>
  );
}

export default Directory;

const RoundLinkDiv = styled.div`
  display: flex;
  justify-content: space-around;

  height: 12em;
  width: 100%;
  @media (min-width: 962px) {
    display: none;
  }
`;

const RoundLink = styled(Link)`
  border-radius: 50%;
  background-image: url(${(props) => props.bg});
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 0.5em;
`;

const MainDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
  @media (max-width: 960px) {
  }
`;
const DeskTopDivMain = styled.div`
  margin: 0 auto;
  @media (max-width: 962px) {
    display: none;
  }
`;

const DesktopImg = styled.img`
  height: 80vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 100%;

  @media (max-width: 960px) {
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

const MiddleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: 960px) {
    height: 100%;
  }
`;

const ImageRowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2em 0;
  @media (max-width: 962px) {
    padding: 0;
  }
`;

const BestSellerDiv = styled.div`
  background: ${(props) => (props.dm ? 'black' : 'white')};
  width: 70%;
  margin: 0 auto;
  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
  }
`;
const BestsellerTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 962px) {
    width: 70%;
    margin: 0em auto 0em auto;
    padding-bottom: 0em;
    align-items: center;
    text-align: center;
  }
`;
const P = styled.p`
  color: ${color};
  padding-top: 3em;
  letter-spacing: 0.2em;
  border-bottom: 1px solid ${color};
`;

const H1 = styled.h1`
  font-size: 3em;
  color: ${(props) => props.color || 'white'};
`;
const BestsellerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3em 0;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const HideImgOnMobile = styled.img`
  @media (max-width: 962px) {
    display: none;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  padding-bottom: 1rem;
  position: fixed;
  bottom: 0;
`;

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  padding: 2em 0em;
`;

const MiniDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 20em;
  padding: 3em 0;
  @media (max-width: 962px) {
    align-items: center;
    flex-direction: column;
    width: 40%;
    margin: 1em 1em;
  }
`;

const MindShapingDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0em 0em 5em 0em;
  width: 90vw;

  @media (max-width: 962px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MindShapingImg = styled.img`
  width: 20em;
  height: 30em;
  @media (max-width: 962px) {
    padding-bottom: 2em;
    margin: 3em;
  }
`;

const HalfDiv = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 80%;
`;
