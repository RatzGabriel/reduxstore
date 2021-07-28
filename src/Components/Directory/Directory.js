import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'react-on-scroll-animation/build/index.css';
import Rosa from 'react-on-scroll-animation';

import LinkEement from '../Elements/Button/Button';
import InformationText from './InformationText';
import ProductComponent from '../ProductsResults/Product/ProductComponent';
import HeaderTextComponent from './HeaderTextComponent';
import MainPageImage from './MainPageImage';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function Directory() {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart({ bestseller: 'bestseller' }));
  }, []);

  const { data } = products;

  return (
    <MainDiv>
      <MainWrapper>
        <MainWrapperHeaderText>
          <h1>Ceramic is our passion</h1>(
          {Array.isArray(data) && data.length > 0 && (
            <MainPageImage
              productOne={data[0]}
              productTwo={data[1]}
              productThree={data[2]}
              productFour={data[3]}
            />
          )}
        </MainWrapperHeaderText>
        <LinkEement adress="search">Shop</LinkEement>
        <MiddleDiv>
          <HeaderTextComponent
            headerText="Our Services"
            title="Fresh Product From Our Farm To Your Home"
            text=" In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented ."
          />
          <LinkEement buttonText="Read More" adress="/search">
            Read More
          </LinkEement>
          <SmallDiv>
            <Img src={'/images/Two.jpg'} alt="" />
          </SmallDiv>
          <SmallDiv>
            <Img pt={'7em'} src={'/images/Two.jpg'} alt="" />
          </SmallDiv>
          <SmallDiv>
            <Img src={'/images/Two.jpg'} alt="" />
          </SmallDiv>
        </MiddleDiv>
        <BestSellerDiv>
          <BestsellerTitleDiv>
            <P>Best Selling</P>
            <H1>Best Sellers products</H1>
          </BestsellerTitleDiv>
          <Rosa
            animation="fade-up"
            duration={1600}
            anchorPlacement="top-bottom"
            once
          >
            <BestsellerCards>
              {Array.isArray(data) &&
                data.length > 0 &&
                data.map((item, index) => {
                  if (item.bestseller === 'bestseller') {
                    return (
                      <MiniDiv id={index}>
                        <ProductComponent
                          product={item}
                          pPrice={item.productPrice}
                          pName={item.productName}
                        />
                      </MiniDiv>
                    );
                  } else console.log(item.bestseller);
                })}
            </BestsellerCards>
          </Rosa>
          <ButtonDiv>
            <StyledLink to="/search">Go To Shop</StyledLink>
          </ButtonDiv>
        </BestSellerDiv>
        <MiddleDiv>
          <HeaderTextComponent
            headerText="About Us"
            title="An Exceptionally Unique Experience Tailored To You"
            text="  There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form ."
          />

          <LinkEement>Get Started</LinkEement>
        </MiddleDiv>
        <MiddleDiv>
          <div>
            <Rosa animation="fade-up" duration={800} once>
              <HideImgOnMobile src={'/images/Two.jpg'} alt="" />
            </Rosa>
          </div>
          <InformationText />
        </MiddleDiv>
        <MiddleDiv>
          <HeaderTextComponent
            title="Meet The Minds Shaping An Industry"
            headerText="Our Team"
          />
        </MiddleDiv>

        <MindShapingDiv>
          <MindShapingImg src={'/images/Musk.jpg'} alt="" />
          <MindShapingImg src={'/images/Musk.jpg'} alt="" />
          <MindShapingImg src={'/images/Musk.jpg'} alt="" />
          <MindShapingImg src={'/images/Musk.jpg'} alt="" />
        </MindShapingDiv>
      </MainWrapper>
      <Rosa animation="fade-right" duration={800} once>
        <MainWrapper>
          <HalfDiv>
            <Iframe
              src="https://www.youtube.com/embed/0pt0MdReMts"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></Iframe>
            <DownArrow src={'/images/down-arrow.svg'}></DownArrow>
          </HalfDiv>
        </MainWrapper>
      </Rosa>
    </MainDiv>
  );
}

export default Directory;

const MainDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  @media (max-width: 960px) {
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 960px) {
  }
`;

const MainWrapperHeaderText = styled.div`
  width: 50%;
  height: 50%;
  @media (max-width: 962px) {
    width: 100%;
  }
`;

const MiddleDiv = styled.div`
  width: 90%;
  display: flex;
  height: 50em;
  justify-content: space-between;
  align-items: center;
  margin: 0em 0em 0em 0em;
  flex-direction: column;
  text-align: center;
  @media (max-width: 960px) {
    height: 100%;
  }
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;
const BestSellerDiv = styled.div`
  background: linear-gradient(
    183deg,
    rgb(114, 114, 114) 0%,
    rgb(197, 197, 197) 46%,
    rgb(114, 114, 114) 100%
  );

  @media (max-width: 960px) {
    text-align: center;
  }
`;
const BestsellerTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
  @media (max-width: 962px) {
    width: 70%;
    margin: 0em auto 3em auto;
    padding-bottom: 0em;
    align-items: center;
    text-align: center;
  }
`;
const P = styled.p`
  color: brown;
  padding-top: 3em;
  letter-spacing: 0.2em;
`;

const H1 = styled.h1`
  font-size: 3em;
  color: ${(props) => props.color || 'white'};
`;
const BestsellerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5em;
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
  height: 100vh;
  width: 100%;
  margin: 2em;
`;

const Img = styled.img`
  height: ${(props) => props.height || '60%'};
  margin-top: ${(props) => props.pt || 0};
  width: 90%;
  @media (max-width: 960px) {
    padding-bottom: 1em;
    margin-top: 0;
  }
`;

const MiniDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  margin: 1em 1em;
  height: 13em;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  width: 8rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-bottom: 3em;
  @media (max-width: 768px) {
    font-size: 1em;
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
  width: 90%;
  max-width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
