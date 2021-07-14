import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import MainPageImage from './MainPageItems';
import Button from '../Elements/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Products/products.actions';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function Directory() {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart({ bestseller: 'bestseller' }));
  }, []);

  console.log('products', products);
  const { data } = products;
  console.log('data', data);
  return (
    <MainDiv>
      <MainWrapper>
        <MainPageImage imgUrl={'/images/Two.jpg'} buttonText={'Shop'} />

        <MiddleDiv>
          <TextDiv>
            <P>Our Services</P>
            <H1>Fresh Product From Our Farm To Your Home</H1>
            <p>
              n a professional context it often happens that private or
              corporate clients corder a publication to be made and presented .
            </p>
            <Button bg="brown" color="white">
              Read more
            </Button>
          </TextDiv>

          <SmallDiv>
            <Img src={'/images/Two.jpg'} alt="" />
          </SmallDiv>
          <SmallDiv>
            <Img pt={7} src={'/images/Two.jpg'} alt="" />
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
          <BestsellerCards>
            {Array.isArray(data) &&
              data.length > 0 &&
              data.map((item, index) => {
                if (item.bestseller === 'bestseller') {
                  return (
                    <MiniDiv id={index}>
                      <BestsellerImages src={item.productThumbnail} alt="" />
                      {item.productName && <h2>{item.productName}</h2>}
                      {item.productPrice && (
                        <BestsellerP>{item.productPrice}.00Euro</BestsellerP>
                      )}
                    </MiniDiv>
                  );
                } else console.log(item.bestseller);
              })}
          </BestsellerCards>
          <ButtonDiv>
            <StyledLink to="/search">Go To Shop</StyledLink>
          </ButtonDiv>
        </BestSellerDiv>
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
      <MainWrapper>
        <Footer />
      </MainWrapper>
    </MainDiv>
  );
}

export default Directory;

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
  width: 100%;
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
  margin: 10em 0em 0em 0em;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 2em;
  height: 60%;
  width: 40%;
`;

const Img = styled.img`
  height: 60%;
  padding-top: ${(props) => props.pt || 0}em;
  width: 90%;
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  color: brown;
`;

const H1 = styled.h1`
  font-size: 3em;
`;

const BestSellerDiv = styled.div`
  background-color: lightgray;
`;

const BestsellerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BestsellerImages = styled.img`
  width: 15em;
  height: 15em;
`;

const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0em 5em 5em 0em;
`;

const BestsellerP = styled.p`
  color: green;
`;

const BestsellerTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
`;
