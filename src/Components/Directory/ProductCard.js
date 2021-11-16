import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../../colors';
import { createStructuredSelector } from 'reselect';
import {
  selectWlItems,
  selectWlTotal,
} from '../../Redux/WishList/wishlist.selectors';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWlItem } from '../../Redux/WishList/wishlist.action';
import { addProduct } from '../../Redux/Cart/cart.action';
import { addToWL } from '../../Redux/WishList/wishlist.action';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const mapState = createStructuredSelector({
  wlItems: selectWlItems,
  total: selectWlTotal,
});

function ProductCard({ product, dm }) {
  const {
    productThumbnail,
    productName,
    productPrice,
    documentID,
    productDescription,
  } = product;
  const dispatch = useDispatch();
  const { wlItems } = useSelector(mapState);
  const [wobble, setWobble] = useState('off');
  const [wobbleCart, setWobbleCart] = useState('off');
  const [heartStatus, setHeartStatus] = useState(false);

  useEffect(() => {
    if (wlItems.length > 0) {
      wlItems.map((item) => {
        if (item.documentID === documentID) {
          return setHeartStatus(true);
        } else return setHeartStatus(false);
      });
    }
  }, []);

  const handleRemoveWlItem = (documentID) => {
    dispatch(removeWlItem(documentID));
  };

  if (
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  ) {
    return <div>nothing to show</div>;
  }
  const handleAddToCard = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
  };

  const handleAddToWl = (product) => {
    if (!product) return;
    dispatch(addToWL(product));
  };

  const timeout = () => {
    setTimeout(function () {
      setWobble('off');
      setWobbleCart('off');
    }, 2000);
  };

  const isItemInWl = (product) => {
    if (wlItems.length > 0) {
      for (let i = 0; i < wlItems.length; i++) {
        if (wlItems[i].documentID === product.documentID) {
          handleRemoveWlItem(product.documentID);
          setHeartStatus(false);
          return;
        } else {
          handleAddToWl(product);
          setHeartStatus(true);
        }
      }
    } else {
      handleAddToWl(product);
      setHeartStatus(true);
    }
  };

  return (
    <ProductCardDiv color={color}>
      <DivIcons>
        <ButtonElementMobile type="button">
          <span>
            {heartStatus ? (
              <FavoriteBorderIcon
                class={wobble}
                fontSize="small"
                htmlColor="white"
                onClick={() => {
                  isItemInWl(product);
                  setWobble('on');
                  timeout();
                }}
              />
            ) : (
              <FavoriteIcon
                class={wobble}
                fontSize="small"
                htmlColor="white"
                onClick={() => {
                  isItemInWl(product);
                  setWobble('on');
                  timeout();
                }}
              />
            )}
          </span>
        </ButtonElementMobile>
        <ButtonElementMobile type="button">
          <span>
            <ShoppingCartIcon
              fontSize="small"
              class={wobbleCart}
              onClick={() => {
                handleAddToCard(product);
                setWobbleCart('on');
                timeout();
              }}
            />
          </span>
        </ButtonElementMobile>
      </DivIcons>
      <LinkImage
        to={`/product/${documentID}`}
        image={productThumbnail}
      ></LinkImage>

      <TextDiv>
        <InnerText>
          <Link to={`/product/${documentID}`}>
            <TitleH1>{productName}</TitleH1>
            <PriceP>{productPrice}</PriceP>
            {productDescription.length > 131 ? (
              <DescriptionP>
                {productDescription.substring(0, 130)}...
              </DescriptionP>
            ) : (
              <DescriptionP>{productDescription}!</DescriptionP>
            )}
            {!productDescription && (
              <DescriptionP>
                Please click on the image to see more Details on this Item.
                Please click on the image to see more Details on this Item.
              </DescriptionP>
            )}
          </Link>
        </InnerText>
      </TextDiv>
    </ProductCardDiv>
  );
}

export default ProductCard;

const LinkImage = styled(Link)`
  width: 40%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const DivIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const ProductCardDiv = styled.div`
  display: flex;
  height: 11rem;
  color: white;
  background-color: ${(props) => props.color};
  position: relative;

  @media (min-width: 962px) {
    height: 17rem;
    width: 25em;
  }
`;

//Wrapper Divs
const ImageDiv = styled.div`
  width: 40%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const TextDiv = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;

const InnerText = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
`;

//
const Image = styled.img`
  height: 70%;
`;

//Text Styles
const DescriptionP = styled.p`
  font-size: 7px;
  color: white;
`;

const PriceP = styled.p`
  font-family: Roboto;
  font-weight: 200;
  font-size: 9px;
  line-height: 11px;
  opacity: 0.3;
  margin: 1em 0;
  color: white;
`;

const TitleH1 = styled.h1`
  margin: 0;
  color: white;
`;

const ButtonElementMobile = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
