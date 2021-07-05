import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ImageList } from '@material/image-list';

import ImageListItem from '@material/image-list';

import { fetchProductsStart } from '../../Redux/Products/products.actions';
import Product from './Product/Product';
import FormSelect from '../Elements/FormSelect/FormSelect';
import Loadmore from '../Loadmore/Loadmore';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  paper: {
    height: '50%',
  },
}));

function ProductResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const { data, queryDoc, isLastPage } = products;
  console.log(isLastPage);

  function srcset(image, size, rows = 1, cols = 1) {
    return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
    ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
  }

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
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {data.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            srcSet={srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
//   <div className={classes.root} style={{ width: 'auto', height: 'auto' }}>
//     <FormSelect {...configFilters}></FormSelect>
//     <Grid container spacing={1}>
//       {data.map((item) => {
//         return (
//           <Grid
//             key={item.productThumbnail}
//             item
//             md={item.cols || 2}
//             xs={12}
//             sm={6}
//           >
//             <Paper>
//               {
//                 <img
//                   style={{ width: '100%', height: '50%' }}
//                   src={item.productThumbnail}
//                   alt={item.productName}
//                 />
//               }
//             </Paper>
//           </Grid>
//         );
//       })}
//     </Grid>

//     {/* {data.map((tile) => (
//         <GridListTile key={tile.productThumbnail} cols={tile.cols || 1}>
//           <img src={tile.productThumbnail} alt={tile.productName} />
//         </GridListTile>
//       ))} */}
//   </div>
// );
//   <div>
//     <FormSelect {...configFilters}></FormSelect>
//     <h1>Products</h1>

//     {/* <div>
//       <GridList cellHeight={360} cols={4}>
//         {data.map((tile) => (
//           <GridListTile key={tile.productThumbnail} cols={tile.cols || 1}>
//             <img src={tile.productThumbnail} alt={tile.productName} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div> */}
//     {/* <MainDiv>
//       {data.map((product, position) => {
//         const { productThumbnail, productName, productPrice } = product;

//         if (
//           !productThumbnail ||
//           !productName ||
//           typeof productPrice === 'undefined'
//         ) {
//           return null;
//         }

//         const configProduct = {
//           ...product,
//         };
//         return <Product key={position} {...configProduct} />;
//       })}
//     </MainDiv> */}
//     {!isLastPage && <Loadmore {...configLoadMore} />}
//   </div>
// );

export default ProductResults;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0 auto;
`;
