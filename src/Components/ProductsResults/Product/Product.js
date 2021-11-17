import React from 'react';
import styled from 'styled-components';
import ProductCard from '../../Directory/ProductCard';

function Product({ product, dm }) {
  return (
    <DivMain>
      <ProductCard dm={dm} product={product} />
    </DivMain>
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

const DivMain = styled.div`
  margin: 1em;
`;
