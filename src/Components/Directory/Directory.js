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
        <Testing>
          <h1>Ceramic is our passion</h1>
          <MainPageImage
            imgUrl={'/images/Two.jpg'}
            buttonText={'Shop'}
            buttonTextTwo={'Read More'}
          />
        </Testing>

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
          <Rosa
            animation="fade-up"
            duration={1600}
            anchorPlacement="top-bottom"
          >
            <BestsellerCards>
              {Array.isArray(data) &&
                data.length > 0 &&
                data.map((item, index) => {
                  if (item.bestseller === 'bestseller') {
                    return (
                      <MiniDiv id={index}>
                        <BestsellerImages src={item.productThumbnail} alt="" />
                        <TestDiv>
                          {item.productName && <h1>{item.productName}</h1>}
                          {item.productPrice && (
                            <StyledLinkBestProduct bg="brown" color="white">
                              {item.productPrice} €
                            </StyledLinkBestProduct>
                          )}
                        </TestDiv>
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
          <TextDiv>
            <Rosa
              animation="fade-left"
              duration={800}
              anchorPlacement={'top-center'}
              offset={400}
              once
            >
              <P>About Us</P>
            </Rosa>
            <Rosa
              animation="fade-up"
              duration={800}
              anchorPlacement={'top-center'}
              offset={600}
              once
            >
              <h1>An Exceptionally Unique Experience Tailored To You</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form .
              </p>
            </Rosa>
            <Rosa
              animation="fade-down"
              duration={800}
              anchorPlacement={'top-center'}
              offset={600}
              once
            >
              <ButtonDiv>
                <StyledLink to="/search">Get Started</StyledLink>
              </ButtonDiv>
            </Rosa>
          </TextDiv>

          <div>
            <Rosa animation="fade-up" duration={800} once>
              <img src={'/images/Two.jpg'} alt="" />
            </Rosa>
          </div>
          <TextDiv style={{ paddingLeft: '2em' }}>
            <Rosa animation="fade-up" duration={400} once>
              <h1>Our Customer</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form .
              </p>
            </Rosa>
            <Rosa
              animation="fade-up"
              duration={600}
              anchorPlacement={'top-center'}
              offset={600}
              once
            >
              <h1>Our Product</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form .
              </p>
            </Rosa>
            <Rosa
              animation="fade-up"
              duration={800}
              anchorPlacement={'top-center'}
              offset={600}
              once
            >
              <h1>Our Services</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form{' '}
              </p>
            </Rosa>
          </TextDiv>
        </MiddleDiv>

        <div>
          <BestsellerTitleDiv>
            <Rosa animation="fade-up" duration={800} once>
              <P color="black">Our Team</P>
            </Rosa>
            <Rosa animation="fade-down" duration={800} once>
              <H1 color="black">Meet The Minds Shaping An Industry</H1>
            </Rosa>
          </BestsellerTitleDiv>
          <MindShapingDiv>
            <Rosa animation="fade-right" duration={1500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
            <Rosa animation="fade-right" duration={1500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
            <Rosa animation="fade-left" duration={1500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
            <Rosa animation="fade-left" duration={1500} once>
              <MindShapingImg src={'/images/Musk.jpg'} alt="" />
            </Rosa>
          </MindShapingDiv>
        </div>
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
      {/* <QuoteDiv>
        <QuoteTextDiv>
          <h1>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur necessitatibus inventore ducimus itaque laudantium
            voluptatem ullam quia temporibus. Beatae, assumenda!" Gabriel Ratz
          </h1>
        </QuoteTextDiv>
      </QuoteDiv> */}

      <Footer />
    </MainDiv>
  );
}

export default Directory;

const Testing = styled.div`
  width: 50%;
  height: 50%;
  @media (max-width: 962px) {
    width: 100%;
  }
`;

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

const MiddleDiv = styled.div`
  width: 90%;
  display: flex;
  height: 50em;
  justify-content: space-between;
  align-items: center;
  margin: 0em 0em 0em 0em;
  @media (max-width: 960px) {
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
  @media (max-width: 960px) {
    padding: 1em;
    margin: 2em;
  }
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

const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  @media (max-width: 960px) {
    margin: 1em;
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

const BestsellerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3em;
`;

const BestsellerImages = styled.img`
  width: 15em;
  height: 15em;
  border-radius: 15%;
`;

const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  margin: 3em 3em 0em 3em;
`;

const TestDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em;
`;

const BestsellerTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;

  @media (max-width: 962px) {
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
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const StyledLinkBestProduct = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  padding: 1em;
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
  padding: 5em 0em 5em 0em;
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
