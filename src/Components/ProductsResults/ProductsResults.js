import React, { useEffect } from 'react';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import FormSelect from '../Elements/FormSelect/FormSelect';
import { useHistory, useParams } from 'react-router-dom';
import Loadmore from '../Loadmore/Loadmore';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function ProductResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  if (!Array.isArray(data)) return null;

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

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
  if (data.length < 1) {
    return (
      <div>
        <FormSelect {...configFilters}></FormSelect>
        <p>No search results</p>
      </div>
    );
  }

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

  return (
    <div>
      <FormSelect {...configFilters}></FormSelect>
      <div>
        {data.map((product, position) => {
          const { productThumbnail, productName, productPrice, documentID } =
            product;

          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === 'undefined'
          ) {
            return null;
          }

          const configProduct = {
            ...product,
          };
          return <Product key={position} {...configProduct} />;
        })}
      </div>
      {!isLastPage && <Loadmore {...configLoadMore} />}
    </div>
  );
}

export default ProductResults;
