import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import Product from './Product/Product';

import FormSelect from '../Elements/FormSelect/FormSelect';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data } = products;

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
    <Div1>
      <TextDiv>
        <FormSelect {...configFilters} />
      </TextDiv>
      {data.map((item) => {
        return <Product product={item} />;
      })}
    </Div1>
  );
};

export default ProductResults;

const TextDiv = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 6em;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
