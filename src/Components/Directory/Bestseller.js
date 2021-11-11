import React from 'react';
import styled from 'styled-components';
import ProductSlider from './ProductSlider';

function Bestseller() {
  const product1 = {
    productName: 'Vase1',
    productThumbnail: '/images/16.jpeg',
    productPrice: '9.80 Euro',
    productDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
  };

  const product2 = {
    productName: 'Vase2',
    productThumbnail: '/images/16.jpeg',
    productPrice: '9.80 Euro',
    productDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
  };

  const product3 = {
    productName: 'Vase3',
    productThumbnail: '/images/16.jpeg',
    productPrice: '9.80 Euro',
    productDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
  };

  return (
    <>
      <BannerImg src="/images/banner1.jpeg" alt="" />
      <ProductSlider
        header="Bestseller"
        product1={(product1, product2, product3)}
      />
      <ProductSlider
        header="New Products"
        product1={(product1, product2, product3)}
      />
    </>
  );
}

export default Bestseller;

const BannerImg = styled.img`
  height: 8rem;
  width: 90%;
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
