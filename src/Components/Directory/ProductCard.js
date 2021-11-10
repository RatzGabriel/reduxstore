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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const mapState = createStructuredSelector({
  wlItems: selectWlItems,
  total: selectWlTotal,
});

function ProductCard({ product }) {
  const {
    productThumbnail,
    productName,
    productPrice,
    documentID,
    productDescription,
  } = product;
  const dispatch = useDispatch();
  const { wlItems } = useSelector(mapState);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [wobble, setWobble] = useState('off');
  const [wobbleCart, setWobbleCart] = useState('off');
  const [heartStatus, setHeartStatus] = useState('primary');

  useEffect(() => {
    if (wlItems.length > 0) {
      wlItems.map((item) => {
        if (item.documentID === documentID) {
          setHeartStatus('secondary');
        }
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
          setHeartStatus('primary');
          return;
        } else {
          handleAddToWl(product);
          setHeartStatus('secondary');
        }
      }
    } else {
      handleAddToWl(product);
      setHeartStatus('secondary');
    }
  };

  return (
    <ProductCardDiv color={color}>
      <DivIcons>
        <ButtonElementMobile type="button">
          <span>
            <FavoriteBorderIcon
              color={heartStatus}
              onClick={() => {
                isItemInWl(product);
                setWobble('on');
                timeout();
              }}
            />
          </span>
        </ButtonElementMobile>
        <ButtonElementMobile type="button">
          <span>
            <ShoppingCartIcon
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
      <ImageDiv>
        <Link to={`/product/${documentID}`}>
          <Image src={productThumbnail} alt={productName} />
        </Link>
      </ImageDiv>
      <TextDiv>
        <InnerText>
          <TitleH1>{productName}</TitleH1>
          <PriceP>{productPrice}</PriceP>
          {productDescription && (
            <DescriptionP>{productDescription}</DescriptionP>
          )}
          {!productDescription && (
            <DescriptionP>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              sint officia? Harum dicta perspiciatis possimus modi veniam
              provident quae necessitatibus.
            </DescriptionP>
          )}
        </InnerText>
      </TextDiv>
    </ProductCardDiv>
  );
}

export default ProductCard;

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
  text-align: left;
  background-color: ${(props) => props.color};
  margin: 1em;
  position: relative;
`;

//Wrapper Divs
const ImageDiv = styled.div`
  width: 50%;
`;

const TextDiv = styled.div`
  display: flex;
  width: 50%;
`;

const InnerText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

//
const Image = styled.img`
  height: 100%;
  max-width: 80%;
`;

//Text Styles
const DescriptionP = styled.p`
  font-size: 7px;
  margin: 0;
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
