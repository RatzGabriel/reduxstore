import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'react-on-scroll-animation/build/index.css';
import HeaderTextComponent from './HeaderTextComponent';
import ImageRow from './ImageRow';
import Bestseller from './Bestseller';
import Footer from '../Footer/Footer';
import MainPageImage from './MainPageImage';

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
          />
          <ImageRow />
        </DivMiddle>
        <BestSellerDiv dm={dm}>
          <Bestseller dm={dm} />
        </BestSellerDiv>
        <DivMiddle>
          <HeaderTextComponent
            dm={dm}
            title="Meet The Minds Shaping An Industry"
            headerText="Our Team"
            imgOne="/images/buffett.jpeg"
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
`;

const BestSellerDiv = styled.div`
  background: ${(props) => (props.dm ? 'black' : 'white')};
  margin: 0 auto;
  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
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
`;
