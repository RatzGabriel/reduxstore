import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import ProductSlider from './ProductSlider';

function Bestseller({ dm }) {
  const product1 = {
    productName: 'Vase1',
    productThumbnail: 'https://i.ibb.co/0htdjhS/16.jpg',
    productPrice: '9.80 Euro',
    productDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
    documentID: '7FXJaI02WunP1Aw3Riey',
  };

  const product2 = {
    productName: 'Vase2',
    productThumbnail: 'https://i.ibb.co/0htdjhS/16.jpg',
    productPrice: '9.80',
    productDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
    documentID: '7FXJaI02WunP1Aw3Riey',
  };

  const product3 = {
    productName: 'Vase3',
    productThumbnail: 'https://i.ibb.co/0htdjhS/16.jpg',
    productPrice: '9.80',
    productDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
    documentID: '7FXJaI02WunP1Aw3Riey',
  };

  return (
    <>
      <BannerImg src="/images/banner1.jpeg" alt="" />

      <ProductSlider
        dm={dm}
        header="Bestseller"
        product1={(product1, product2, product3)}
      />
      <ProductSlider
        dm={dm}
        header="New Products"
        product1={(product1, product2, product3)}
      />
    </>
  );
}

export default Bestseller;

const DivHideOnMobile = styled.div`
  display: flex;
  margin: 4em 0;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 962px) {
    display: none;
  }
`;

const BannerImg = styled.img`
  height: 8rem;
  width: 90%;
  @media (min-width: 962px) {
    display: none;
  }
`;

/* <BestsellerTitleDiv>
            <P>Best Selling</P>
            <H1>Best Seller products</H1>
          </BestsellerTitleDiv>

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
                } else return null;
              })}
          </BestsellerCards>

          <ButtonDiv>
            <Link to="/search">
              <ButtonElement adress="search">Go To Shop</ButtonElement>
            </Link>
          </ButtonDiv> */
