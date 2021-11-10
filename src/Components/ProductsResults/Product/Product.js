import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../../Directory/ProductCard';

function Product({ product, pt, pb, wd, height, pPrice }) {
  return (
    <ProductCard product={product} />
    // <NewMainDiv>
    //   <StyledLink
    //     height={height}
    //     paddin={pt}
    //     margin={pt}
    //     pb={pb}
    //     wd={wd}
    //     to={`/product/${documentID}`}
    //     onMouseEnter={() => {
    //       setButtonStatus(true);
    //     }}
    //     onMouseLeave={() => {
    //       setButtonStatus(false);
    //     }}
    //   >
    //     <Img src={productThumbnail}></Img>
    //     {buttonStatus && (
    //       <NewTestDiv>
    //         <TestDiv top="25%">
    //           <Rosa
    //             animation="fade-down"
    //             duration={800}
    //             anchorPlacement={'top-center'}
    //             offset={1200}
    //           >
    //             <ButtonElement
    //               content="Add to Cart"
    //               type="button"
    //               vis={buttonStatus}
    //               onClick={() => handleAddToCard(product)}
    //             >
    //               <span> {productPrice} € </span>
    //             </ButtonElement>
    //           </Rosa>
    //         </TestDiv>
    //         <TestDiv top="70%">
    //           <Rosa
    //             animation="fade-down"
    //             duration={800}
    //             anchorPlacement={'top-center'}
    //             offset={1200}
    //           >
    //             <ButtonElement
    //               content="Add to WishList"
    //               type="button"
    //               vis={buttonStatus}
    //               onClick={() => {
    //                 handleAddToCard(product);
    //               }}
    //             >
    //               <span>
    //                 <img
    //                   class={wobble}
    //                   src={heartStatus}
    //                   alt="favorite"
    //                   onClick={() => {
    //                     setWobble('on');
    //                     timeout();
    //                   }}
    //                 />
    //               </span>
    //             </ButtonElement>
    //           </Rosa>
    //         </TestDiv>
    //       </NewTestDiv>
    //     )}
    //   </StyledLink>
    /* Mobile */
    /* <ProductDiv>
        <PositionDiv>
          <Link to={`/product/${documentID}`}>
            <Img src={productThumbnail}></Img>
          </Link>
        </PositionDiv>
        <TestDivText>
          <ButtonElementMobile type="button" vis={buttonStatus}>
            <span>
              <img
                class={wobble}
                src={heartStatus}
                alt="favorite"
                onClick={() => {
                  isItemInWl(product);
                  setWobble('on');
                  timeout();
                }}
              />
            </span>
          </ButtonElementMobile>

          <P>{pPrice || productPrice} Euro</P>

          <ButtonElementMobile
            type="button"
            vis={buttonStatus}
            onClick={() => handleAddToCard(product)}
          >
            <span>
              <img
                class={wobbleCart}
                src={'/images/cart.jpg'}
                alt="cart"
                onClick={() => {
                  setWobbleCart('on');
                  timeout();
                }}
              />
            </span>
          </ButtonElementMobile>
        </TestDivText>
      </ProductDiv> */
    // </NewMainDiv>
  );
}

export default Product;

const DescriptionP = styled.p`
  font-size: 7px;
  margin: 0;
  color: white;
`;

const TitleH1 = styled.h1`
  margin: 0;
  color: white;
`;

const PriceP = styled.p`
  font-family: Roboto;
  font-weight: 200;
  font-size: 9px;
  line-height: 11px;
  opacity: 0.3;
  margin: 0;
  color: white;
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

const DivMain = styled.div`
  display: flex;
  text-align: left;
  background-color: ${(props) => props.color};
  margin: 1em 1em;
`;

const Image = styled.img`
  height: 100%;
`;

const ImageDiv = styled.div`
  width: 50%;
  height: 10em;
`;

const NewTestDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NewMainDiv = styled.div`
  display: flex;
  margin-top: 1em;
  background-color: red;
  @media (max-width: 962px) {
    width: 80%;
  }
`;

const P = styled.p`
  margin: 1em;
`;

const PositionDiv = styled.div``;

const ButtonElementMobile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TestDivText = styled.div`
  display: flex;
  background-color: white;
  color: black;
  border: 1px solid black;
  @media (max-width: 962px) {
  }
`;

const TestDiv = styled.div`
  top: ${(props) => props.top};
  cursor: pointer;
  position: absolute;
  @media only screen and (max-width: 1100px) {
    position: static;
    border-radius: 0;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  color: black;
  width: 80%;
  cursor: pointer;
  align-items: center;
  height: ${(props) => props.height || '100%'};
  padding: 1em;
  padding-top: ${(props) => props.padding || '1em'};
  padding-bottom: ${(props) => props.pb || '1em'};
  margin-top: ${(props) => props.margin || '1em'};
  flex-direction: column;
  @media (max-width: 962px) {
    display: none;
    text-align: center;
    align-items: center;
    padding: 1em;
    margin: 1em;
    position: sticky;
    text-decoration: none;
    padding: 0em 0em 0em 0em;
    margin: 0em auto;
    width: 50%;
  }
`;

const ProductDiv = styled.div`
  display: none;
  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 1em;
    margin: 1em;
    position: sticky;
    text-decoration: none;
    padding: 0em 0em 0em 0em;
  }
`;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding: 1em 3em;
  border-radius: 35px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover span {
    display: none;
  }
  &:hover:before {
    content: '${(props) => props.content}';
  }
  &:hover {
    background-color: black;
  }
  @media only screen and (max-width: 1100px) {
    display: inline-block;
    position: static;
    border-radius: 0;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  display: flex;

  &:hover {
    transition: all 0.3s ease;
    opacity: 0.7;
  }
  @media only screen and (max-width: 1100px) {
    display: block;

    margin-top: 3em;
  }
`;
