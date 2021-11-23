import React from 'react';
import styled from 'styled-components';

function ProductCardNewProducts() {
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
    <DivMain>
      <div>
        <Img src={product1.productThumbnail} alt={product1.productName} />
        <DivBottom>
          <DivBottomInner>
            <h1>{product1.productName}</h1>
            <p>{product1.productPrice}</p>
            <p>{product1.productDescription}</p>
          </DivBottomInner>
        </DivBottom>
      </div>
      <div>
        <Img src={product1.productThumbnail} alt={product1.productName} />
        <DivBottom>
          <DivBottomInner>
            <h1>{product1.productName}</h1>
            <p>{product1.productPrice}</p>
            <p>{product1.productDescription}</p>
          </DivBottomInner>
        </DivBottom>
      </div>
      <div>
        <Img src={product1.productThumbnail} alt={product1.productName} />
        <DivBottom>
          <DivBottomInner>
            <h1>{product1.productName}</h1>
            <p>{product1.productPrice}</p>
            <p>{product1.productDescription}</p>
          </DivBottomInner>
        </DivBottom>
      </div>
    </DivMain>
  );
}

export default ProductCardNewProducts;

const DivBottomInner = styled.div`
  width: 80%;
`;

const DivBottom = styled.div`
  height: 30%;
  background-color: white;
  width: 25em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 50%;
  width: 25em;
`;

const DivMain = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 3em 0;
`;
