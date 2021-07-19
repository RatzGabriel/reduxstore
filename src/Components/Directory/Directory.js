import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import MainPageImage from './MainPageItems';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';

import { keyframes } from 'styled-components';
import 'react-on-scroll-animation/build/index.css';
import Rosa from 'react-on-scroll-animation';

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
        <MainPageImage imgUrl={'/images/Two.jpg'} buttonText={'Shop'} />

        <MiddleDiv>
          <TextDiv>
            <P>Our Services</P>
            <H1 color={'black'}>Fresh Product From Our Farm To Your Home</H1>
            <p>
              n a professional context it often happens that private or
              corporate clients corder a publication to be made and presented .
            </p>
            <StyledLink bg="brown" color="white">
              Read more
            </StyledLink>
          </TextDiv>

          <SmallDiv>
            <Rosa
              animation="fade-up"
              duration={800}
              anchorPlacement="top-bottom"
            >
              <Img src={'/images/Two.jpg'} alt="" />
            </Rosa>
          </SmallDiv>
          <SmallDiv>
            <Rosa
              animation="fade-down"
              duration={800}
              anchorPlacement="top-bottom"
            >
              <Img pt={'7em'} src={'/images/Two.jpg'} alt="" />
            </Rosa>
          </SmallDiv>
          <SmallDiv>
            <Rosa
              animation="fade-up"
              duration={800}
              anchorPlacement="top-bottom"
            >
              <Img src={'/images/Two.jpg'} alt="" />
            </Rosa>
          </SmallDiv>
        </MiddleDiv>
        <BestSellerDiv>
          <BestsellerTitleDiv>
            <P>Best Selling</P>
            <H1>Best Sellers products</H1>
          </BestsellerTitleDiv>
          <BestsellerCards>
            {Array.isArray(data) &&
              data.length > 0 &&
              data.map((item, index) => {
                if (item.bestseller === 'bestseller') {
                  return (
                    <MiniDiv id={index}>
                      <BestsellerImages src={item.productThumbnail} alt="" />
                      <TestDiv>
                        {item.productName && <h2>{item.productName}</h2>}
                        {item.productPrice && (
                          <StyledLink bg="brown" color="white">
                            {item.productPrice} €
                          </StyledLink>
                        )}
                      </TestDiv>
                    </MiniDiv>
                  );
                } else console.log(item.bestseller);
              })}
          </BestsellerCards>
          <ButtonDiv>
            <StyledLink to="/search">Go To Shop</StyledLink>
          </ButtonDiv>
        </BestSellerDiv>
        <Rosa animation="fade-right" duration={900}>
          <MiddleDiv>
            <TextDiv>
              <P>About Us</P>
              <h1>An Exceptionally Unique Experience Tailored To You</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form .
              </p>
              <StyledLink>Get Started</StyledLink>
            </TextDiv>

            <div>
              <img src={'/images/Two.jpg'} alt="" />
            </div>
            <TextDiv style={{ paddingLeft: '2em' }}>
              <h1>Our Customer</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form .
              </p>
              <h1>Our Product</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form .
              </p>
              <h1>Our Services</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form{' '}
              </p>
            </TextDiv>
          </MiddleDiv>
        </Rosa>
        <div>
          <BestsellerTitleDiv>
            <P>Our Team</P>
            <H1>Meet The Minds Shaping An Industry</H1>
          </BestsellerTitleDiv>
          <MindShapingDiv>
            <Rosa animation="fade-right" duration={500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
            <Rosa animation="fade-right" duration={500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
            <Rosa animation="fade-left" duration={500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
            <Rosa animation="fade-left" duration={500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
          </MindShapingDiv>
        </div>
      </MainWrapper>

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
      <QuoteDiv>
        <QuoteTextDiv>
          <h1>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur necessitatibus inventore ducimus itaque laudantium
            voluptatem ullam quia temporibus. Beatae, assumenda!" Gabriel Ratz
          </h1>
        </QuoteTextDiv>
      </QuoteDiv>
      <MainWrapper>
        <Footer />
      </MainWrapper>
    </MainDiv>
  );
}

export default Directory;

const animation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

`;

const MainDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
`;

const MiddleDiv = styled.div`
  width: 90%;
  display: flex;
  height: 50em;
  justify-content: space-between;
  align-items: center;
  margin: 10em 0em 0em 0em;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-right: 2em;
  height: ${(props) => props.height || '100%'};
  width: 40%;
`;

const Img = styled.img`
  height: ${(props) => props.height || '60%'};
  margin-top: ${(props) => props.pt || 0};
  width: 90%;
  @media (max-width: 768px) {
    padding-bottom: 2em;
    padding-top: 2em;
  }
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
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

const BestSellerDiv = styled.div`
  background: linear-gradient(
    183deg,
    rgb(114, 114, 114) 0%,
    rgb(197, 197, 197) 46%,
    rgb(114, 114, 114) 100%
  );
`;

const BestsellerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3em;
`;

const BestsellerImages = styled.img`
  width: 15em;
  height: 15em;
`;

const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: white;
  margin: 3em 3em 0em 3em;
`;

const TestDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BestsellerP = styled.p`
  color: brown;
`;

const BestsellerTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
    padding-bottom: 5em;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5em;
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
`;

const QuoteDiv = styled.div`
  height: 70vh;
  background-color: black;
  padding-bottom: 2em;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuoteTextDiv = styled.div`
  width: 50%;
`;

const MindShapingDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-bottom: 3em;
  width: 90vw;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MindShapingImg = styled.img`
  width: 20em;
  height: 30em;
  @media (max-width: 768px) {
    padding-bottom: 2em;
  }
`;
