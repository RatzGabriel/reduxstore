import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Product from './Product/Product';
import FormSelect from '../Elements/FormSelect/FormSelect';

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

const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin: 0 auto;
`;

const TextDiv = styled.div`
  justify-content: center;
  display: flex;
  padding: 8em 0 0 0;

  @media (max-width: 962px) {
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${(props) => (props.dm === 'on' ? 'black' : 'white')};

  @media (max-width: 962px) {
    width: 100%;
    flex-direction: column;
  }
`;
