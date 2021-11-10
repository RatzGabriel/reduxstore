import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Product from './Product/Product';
import FormSelect from '../Elements/FormSelect/FormSelect';
import { color } from '../../colors';
const mapState = ({ productsData, darkmode }) => ({
  products: productsData.products,
  darkmodefromState: darkmode,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products, darkmodefromState } = useSelector(mapState);
  let darkmode = darkmodefromState.darkmode;

  const { data } = products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <Div1 dm={darkmode}>
      <DivBanner color={color}>
        <H1Banner>Shop</H1Banner>
      </DivBanner>
      <TextDiv>
        <FormSelect {...configFilters} dm={darkmode} />
      </TextDiv>
      <InnerDiv>
        {data.map((item) => {
          return <Product product={item} />;
        })}
      </InnerDiv>
    </Div1>
  );
};

export default ProductResults;

const H1Banner = styled.h1`
  color: white;
  margin-left: 1em;
  font-size: 1.5rem;
`;

const DivBanner = styled.div`
  padding-top: 4em;
  background-color: ${(props) => props.color};
  height: 8em;
  display: flex;
  align-items: center;
`;

const InnerDiv = styled.div``;

const TextDiv = styled.div`
  display: flex;
  padding: 1em 0 0 0;
  margin-left: 1em;
  @media (max-width: 962px) {
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};

  @media (max-width: 962px) {
    width: 100%;
    flex-direction: column;
  }
`;
