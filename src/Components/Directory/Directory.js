import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'react-on-scroll-animation/build/index.css';
import HeaderTextComponent from './HeaderTextComponent';
import { color } from '../../colors';
import Bestseller from './Bestseller';
import Footer from '../Footer/Footer';
import MainPageImage from './MainPageImage';
import { Link } from 'react-router-dom';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function Directory({ dm }) {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart({ bestseller: 'bestseller' }));
  }, []);

  const { data } = products;

  return (
    <DivMain dm={dm}>
      <DivLandingPageDesktop>
        <IMGLanding src="/images/landing.jpeg" alt="" />
        <LinkButton to="/search">
          <ButtonLanding color={color}>GO TO STORE</ButtonLanding>
        </LinkButton>
      </DivLandingPageDesktop>
      <DivWrapper>
        {Array.isArray(data) && data.length > 0 && (
          <MainPageImage data={data} />
        )}
        <DivMiddle>
          <HeaderTextComponent
            headerText="Our Service"
            title="We produce tiny Ceramic items"
            text=" In a world getting bigger and bigger Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci emque ad.  ."
            imgOne="/images/Two.jpg"
            buttonText="Read More"
            linkTo="search"
            dm={dm}
            imgTwo="/images/23.jpeg"
            imgThree="/images/25.jpeg"
          />
        </DivMiddle>
        <BestSellerDiv dm={dm}>
          <Bestseller dm={dm} data={data} />
        </BestSellerDiv>
        <DivMiddle>
          <HeaderTextComponent
            dm={dm}
            title="Meet The Minds Shaping An Industry"
            headerText="Our Team"
            imgOne="/images/buffett.jpeg"
            imgTwo="/images/buffett.jpg"
            imgThree="/images/buffett.jpeg"
            buttonText="Read More"
            text="  There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form ."
          />
        </DivMiddle>
        <DivHalf>
          <Iframe
            src="https://www.youtube.com/embed/0pt0MdReMts"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </DivHalf>
        <Footer dm={dm} />
      </DivWrapper>
    </DivMain>
  );
}

export default Directory;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

const ButtonLanding = styled.button`
  height: 5em;
  color: white;
  background-color: ${(props) => props.color};
  border: none;
  width: 100%;
`;

const IMGLanding = styled.img``;

const DivLandingPageDesktop = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 962px) {
    display: none;
  }
`;

const DivMain = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const DivWrapper = styled.div`
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
    flex-direction: row;
  }
`;

const DivMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 960px) {
    height: 100%;
  }
  @media (min-width: 960px) {
    width: 90%;
  }
`;

const BestSellerDiv = styled.div`
  background: ${(props) => (props.dm ? 'black' : 'white')};
  margin: 0 auto;
  width: 90%;

  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 960px) {
    text-align: center;
    width: 90%;
    height: 100%;
  }
`;

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  padding: 2em 0em;
`;

const DivHalf = styled.div`
  height: 80vh;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 962px) {
    width: 90%;
    margin: 6em auto;
  }
`;
