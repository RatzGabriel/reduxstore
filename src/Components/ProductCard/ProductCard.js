import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  fetchProductStart,
  setProduct,
} from '../../Redux/Products/products.actions';
import { addProduct } from '../../Redux/Cart/cart.action';

const mapState = (state) => ({
  product: state.productsData.product,
});

function ProductCard() {
  const { product } = useSelector(mapState);
  const history = useHistory();
  const dispatch = useDispatch();
  const { productID } = useParams();
  const {
    productName,
    productThumbnail,
    productPrice,
    productDescription,
    secondImage,
  } = product;
  const [img, setImg] = useState(productThumbnail);

  useEffect(() => {
    setImg(productThumbnail);
  }, [productThumbnail]);

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push('/cart');
  };

  return (
    <MainDiv>
      <ProductDiv>
        <ImageDiv>
          <Img src={img} alt="" />
        </ImageDiv>
        <ProductDetailsDiv>
          <p>{productPrice}€</p>
          <h3>{productName}</h3>
          <ButtonProduct>Add to cart</ButtonProduct>
          <ButtonProduct>Buy with Gpay</ButtonProduct>
          <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
        </ProductDetailsDiv>
      </ProductDiv>
      <DivSmallImg>
        <ImgSmall
          onClick={() => setImg(productThumbnail)}
          src={productThumbnail}
          alt=""
        />
        {secondImage && (
          <ImgSmall
            onClick={() => setImg(secondImage)}
            src={productThumbnail}
            alt=""
          />
        )}
      </DivSmallImg>
    </MainDiv>
  );
}

export default ProductCard;

const DivSmallImg = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 3em;
  width: 90%;
  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const ImgSmall = styled.img`
  height: 10em;
  padding-right: 3em;
  @media (max-width: 962px) {
    display: none;
  }
`;

const ButtonProduct = styled.button`
  margin: 2em 0em;
  padding: 1em;
  border: none;
`;

const Img = styled.img`
  width: 90%;
  height: 98%;
`;

const ImageDiv = styled.div`
  width: 70%;
  @media (max-width: 962px) {
    display: flex;
  }
`;

const ProductDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  justify-content: flex-start;
  @media (max-width: 962px) {
    padding: 3em 0em;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  width: 90%;
  height: 80%;
  padding: 5em 0em 0em 0em;
  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media (max-width: 962px) {
    width: 90%;
    margin: 0 auto;
  }
`;

// const Image = styled.img`
//   height: 40em;
//   width: 30em;
//   padding-left: 4em;
// `;

// const H1 = styled.h1`
//   border-bottom: 1px solid black;
// `;

// const Li = styled.li`
//   border: 1px solid black;
//   list-style: none;
// `;

// const Button = styled.button`
//   color: ${(props) => props.color || 'white'};
//   background-color: ${(props) => props.bg || 'brown'};
//   padding-left: 24px;
//   padding-right: 24px;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   border-radius: 35px;
//   font-weight: ${(props) => props.fw || '600'};
//   font-size: 18px;
//   width: 8rem;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;
//   text-align: center;
// `;

// <MainDiv>
//   <div>
//     <Image src={productThumbnail} alt="" />
//     {secondImage && <Image src={secondImage} alt="" />}
//   </div>
//   <H1>{productName}</H1>

//   <h2>
//     Price:{productPrice}
//     <EuroIcon />
//   </h2>

//   <Button onClick={() => handleAddToCart(product)}>Add to Cart Btn</Button>
//   <Li>
//     <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
//   </Li>
// </MainDiv>
