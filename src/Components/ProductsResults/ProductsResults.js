import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormSelect from '../Elements/FormSelect/FormSelect';
import LoadMore from '../Loadmore/Loadmore';
import Product from './Product/Product';

import styled from 'styled-components';

import './ProductsResults.css';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = ({}) => {
  const [buttonStatus, setButtonStatus] = useState('none');
  const [backGround, setBackground] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: 'Show all',
        value: '',
      },
      {
        name: 'Vasen',
        value: 'vasen',
      },
      {
        name: 'Andere',
        value: 'andere',
      },
    ],
    handleChange: handleFilter,
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  const breakpointColumnsObj = {
    default: 6,
    2300: 4,
    1200: 3,
    992: 2,
    768: 2,
    576: 1,
  };
  console.log(data);

  return (
    <Div1>
      <Div2>
        <Div2InnerDiv>
          <Product product={data[0]} />
          <Product product={data[1]} />
        </Div2InnerDiv>
        <Div2InnerDivBig>
          <Product product={data[2]} />
        </Div2InnerDivBig>
        <Div2InnerDiv>
          <Product product={data[3]} />
          <Product product={data[4]} />
        </Div2InnerDiv>
      </Div2>
      <Div2>
        <Div2InnerDivQuatro>
          <Product product={data[0]} />
          <Product pt={'3em'} product={data[6]} />
          <Product pt={'3em'} product={data[7]} />
          <Product product={data[8]} />
        </Div2InnerDivQuatro>
      </Div2>
      <Div2>
        <Div2InnerDivBig>
          <Product product={data[1]} />
        </Div2InnerDivBig>
        <Div2InnerDiv>
          <Product product={data[1]} />
          <Product product={data[1]} />
        </Div2InnerDiv>

        <Div2InnerDiv>
          <Product product={data[1]} />
          <Product product={data[1]} />
        </Div2InnerDiv>
      </Div2>
      <Div2>
        <Div2InnerDiv>
          <Product product={data[0]} />
          <Product product={data[1]} />
        </Div2InnerDiv>
        <Div2InnerDiv>
          <Product product={data[1]} />
          <Product product={data[4]} />
        </Div2InnerDiv>
        <Div2InnerDivBig>
          <Product product={data[2]} />
        </Div2InnerDivBig>
      </Div2>
      <Div2>
        <Div2InnerDivQuatro>
          <Product product={data[1]} />
          <Product product={data[1]} />
          <Product product={data[1]} />
          <Product product={data[1]} />
        </Div2InnerDivQuatro>
      </Div2>
    </Div1>
  );
};

export default ProductResults;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div2 = styled.div`
  display: flex;
  @media (max-width: 775px) {
    display: block;
    margin: 0 auto;
  }
`;

const Div2InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  @media (max-width: 775px) {
    display: block;
    margin: 0 auto;
    width: 70%;
    max-width: 70%;
  }
`;
const Div2InnerDivQuatro = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 775px) {
    display: block;
    margin: 0 auto;
    width: 70%;
    max-width: 70%;
  }
`;

const Div2InnerDivBig = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 775px) {
    display: none;
  }
`;

// <MainDiv>
//   <h1>Browse</h1>
//   <FormSelect {...configFilters} />
//   <Test>
//     <Cont5>
//       <Cont5RowDiv>
//         <Cont5MidImg src={data[0].productThumbnail} alt="" />
//         <Cont5MidImg src={data[1].productThumbnail} alt="" />
//       </Cont5RowDiv>
//       <Cont5Mid>
//         <Cont5MidImgBig src={data[2].productThumbnail} alt="" />
//       </Cont5Mid>
//       <Cont5RowDiv>
//         <Cont5MidImg src={data[3].productThumbnail} alt="" />
//         <Cont5MidImg src={data[4].productThumbnail} alt="" />
//       </Cont5RowDiv>
//     </Cont5>
//     {data[6] && data[8] && (
//       <Cont5RowDivInner>
//         <Cont4MidImg src={data[5].productThumbnail} alt="" />
//         <Cont4MidImg src={data[6].productThumbnail} alt="" />
//         <Cont4MidImg src={data[7].productThumbnail} alt="" />
//         <Cont4MidImg src={data[8].productThumbnail} alt="" />
//       </Cont5RowDivInner>
//     )}
//     {data[11] && data[13] && (
//       <Cont5>
//         <Cont5Mid>
//           <Cont5MidImgBig src={data[11].productThumbnail} alt="" />
//         </Cont5Mid>
//         <Cont5RowDiv>
//           <Cont5MidImg src={data[9].productThumbnail} alt="" />
//           <Cont5MidImg src={data[10].productThumbnail} alt="" />
//         </Cont5RowDiv>
//         <Cont5RowDiv>
//           <Cont5MidImg src={data[12].productThumbnail} alt="" />
//           <Cont5MidImg src={data[13].productThumbnail} alt="" />
//         </Cont5RowDiv>
//       </Cont5>
//     )}
//   </Test>
// </MainDiv>

/* {data.map((product, pos) => {
        const { productThumbnail, productName, productPrice } = product;
        if (
          !productThumbnail ||
          !productName ||
          typeof productPrice === 'undefined'
        )
          return <div>Null</div>;

        const configProduct = {
          ...product,
        };
        return <Product key={pos} {...configProduct} />;
      })} */
