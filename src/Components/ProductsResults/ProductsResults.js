import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Product from './Product/Product';
import FormSelect from '../Elements/FormSelect/FormSelect';
import { color } from '../../colors';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = ({ dm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

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
    <Div1 dm={dm}>
      <DivBanner color={color}>
        <DivInner>
          <H1Banner>Shop</H1Banner>
          <TextDiv>
            <FormSelect {...configFilters} dm={dm} />
          </TextDiv>
        </DivInner>
      </DivBanner>

      <InnerDiv>
        {data.map((item) => {
          return <Product product={item} dm={dm} />;
        })}
      </InnerDiv>
    </Div1>
  );
};

export default ProductResults;

const DivInner = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1Banner = styled.h1`
  color: white;

  font-size: 1.5rem;
`;

const DivBanner = styled.div`
  background-color: ${(props) => props.color};
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 962px) {
    padding-top: 0;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TextDiv = styled.div`
  display: flex;

  justify-content: flex-end;
  @media (max-width: 962px) {
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  margin-top: 5em;
  @media (max-width: 962px) {
    width: 100%;
    flex-direction: column;
  }
  @media (min-width: 962px) {
    width: 50%;
    margin: 0 auto;
  }
`;
