import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ImageList, { Button } from '@material-ui/core';

import { fetchProductsStart } from '../../Redux/Products/products.actions';
import Product from './Product/Product';
import FormSelect from '../Elements/FormSelect/FormSelect';
import Loadmore from '../Loadmore/Loadmore';

import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
function ProductResults() {
  function srcset(image, size, rows = 1, cols = 1) {
    return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
    ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
  }
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const { data, queryDoc, isLastPage } = products;
  console.log(isLastPage);

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
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {data.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.productThumbnail}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.productName}
                </Typography>
                <Typography>This is a beautiful Gem</Typography>
                <Typography>{card.productPrice}€</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductResults;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0 auto;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
