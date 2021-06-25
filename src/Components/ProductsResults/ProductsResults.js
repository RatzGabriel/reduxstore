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

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  if (!Array.isArray(products)) return null;

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
  if (products.length < 1) {
    return (
      <div>
        <FormSelect {...configFilters}></FormSelect>
        <p>No search results</p>
      </div>
    );
  }

  const handleLoadMore = () => {};

  const cofigLoadMore = {
    onLoadMoreEvent: handleLoadMore,
  };

  return (
    <div>
      <FormSelect {...configFilters}></FormSelect>
      <div>
        {products.map((product, position) => {
          const { productThumbnail, productName, productPrice } = product;

          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === 'undefined'
          ) {
            return null;
          }
          const configProduct = {
            productThumbnail,
            productName,
            productPrice,
          };
          return <Product {...configProduct} />;
        })}
      </div>
      <Loadmore {...cofigLoadMore} />
    </div>
  );
}

export default ProductResults;
