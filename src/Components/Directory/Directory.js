import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import HeaderTextComponent from './HeaderTextComponent';
import { color } from '../../colors';
import Bestseller from './Bestseller';
import Footer from '../Footer/Footer';
import MainPageImage from './MainPageImage';
import { Link } from 'react-router-dom';
import ButtonElement from '../Elements/Button/Button';
import ProductCardNewProducts from './ProductCardNewProducts';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function Directory({ dm }) {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart({ bestseller: 'bestseller' })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data } = products;

  let grapqhL = 'check data log';

  return (
    <DivMain dm={dm}>
      <DivLandingPageDesktop url={'/images/landing.jpeg'}>
        {/* <IMGLanding src="/images/landing.jpeg" alt="" /> */}

        <DivTextLandingPage>
          <div>
            <H1LandingPage>Our Service</H1LandingPage>
            <H3>We produce tiny Ceramic Items</H3>
          </div>
          <PLandingPage>
            In a World getting bigger and biger we produce really tiny winy
            items
          </PLandingPage>
          <LinkButton to="/search">
            <ButtonLanding color={color}>GO TO STORE</ButtonLanding>
          </LinkButton>
        </DivTextLandingPage>
      </DivLandingPageDesktop>
      <DivNewProductsDesktop color={color}>
        <DivNewProductsHeader>
          <DivEmpty />
          <DivNewProductsHeaderLeft>
            <H1NewProducts>New Products</H1NewProducts>
            <PNewProductsLeft>
              The best products in the world,made for you
            </PNewProductsLeft>
          </DivNewProductsHeaderLeft>
          <DivNewProductsHeaderRight>
            <ButtonNewProducts>Store</ButtonNewProducts>
          </DivNewProductsHeaderRight>
        </DivNewProductsHeader>
        <DivNewProductCards>
          <ProductCardNewProducts />
        </DivNewProductCards>
      </DivNewProductsDesktop>
      <DivWrapper>
        {Array.isArray(data) && data.length > 0 && (
          <MainPageImage data={data} />
        )}
        <DivMiddle>
          <HeaderTextComponent
            headerText="Our Service"
            title="We produce tiny Ceramic items"
            text=" In a world getting bigger and bigger Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci emque ad.In a world getting bigger and bigger Lorem ipsum dolor sit  ."
            imgOne="/images/Two.jpg"
            buttonText="Read More"
            linkTo="search"
            dm={dm}
            imgTwo="/images/23.jpeg"
            imgThree="/images/25.jpeg"
            imgBanner="/images/banner1.jpeg"
          />
        </DivMiddle>
        <BestSellerDiv dm={dm}>
          <Bestseller dm={dm} data={data} />
        </BestSellerDiv>
        <DivMiddle>
          <HeaderTextComponent
            imgBanner="/images/26.jpeg"
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

const DivNewProductCards = styled.div`
  display: flex;
`;

const PNewProductsLeft = styled.p`
  color: white;
`;

const H1NewProducts = styled.h1`
  font-size: 4em;
  color: white;
`;

const ButtonNewProducts = styled.button`
  width: 13em;
  height: 4em;
  background: #ffffff;
`;

const DivEmpty = styled.div`
  width: 50%;
`;

const DivNewProductsHeaderRight = styled.div`
  width: 20.6%;
`;

const DivNewProductsHeaderLeft = styled.div`
  width: 50%;
`;

const DivNewProductsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 30%;
`;

const DivNewProductsDesktop = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  width: 100%;
  @media (max-width: 962px) {
    display: none;
  }
`;

const PLandingPage = styled.p`
  color: white;
  width: 70%;
`;

const H1LandingPage = styled.h1`
  font-size: 3em;
  color: white;
`;

const H3 = styled.h3`
  color: #cbcbcb;
`;

const DivTextLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5em;
  width: 15%;
  height: 20em;
  justify-content: space-around;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

const ButtonLanding = styled.button`
  position: absolute;
  width: 272.53px;
  height: 75.26px;
  left: 84px;
  top: 686px;
  border: none;
  background: #ffffff;
  box-shadow: -7.98207px -7.98207px 76.3998px #ffffff;
`;

const IMGLanding = styled.img``;

const DivLandingPageDesktop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url(${(props) => props.url});
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
    justify-content: center;
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
