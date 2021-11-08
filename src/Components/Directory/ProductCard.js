import React from 'react';
import styled from 'styled-components';
import { color } from '../../colors';

function ProductCard({ product }) {
  return (
    <ProductCardDiv color={color}>
      <ImageDiv>
        <Image src={product.img} alt={product.title} />
      </ImageDiv>
      <TextDiv>
        <InnerText>
          <TitleH1>{product.title}</TitleH1>
          <PriceP>{product.price}</PriceP>
          <DescriptionP>{product.description}</DescriptionP>
        </InnerText>
      </TextDiv>
    </ProductCardDiv>
  );
}

export default ProductCard;

const ProductCardDiv = styled.div`
  display: flex;
  height: 11rem;
  color: white;
  text-align: left;
  background-color: ${(props) => props.color};
`;

//Wrapper Divs
const ImageDiv = styled.div`
  width: 50%;
`;

const TextDiv = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const InnerText = styled.div`
  width: 50%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

//
const Image = styled.img`
  height: 100%;
`;

//Text Styles
const DescriptionP = styled.p`
  font-size: 7px;
  margin: 0;
`;

const PriceP = styled.p`
  font-family: Roboto;
  font-weight: 200;
  font-size: 9px;
  line-height: 11px;
  opacity: 0.3;
  margin: 0;
`;

const TitleH1 = styled.h1`
  margin: 0;
`;
