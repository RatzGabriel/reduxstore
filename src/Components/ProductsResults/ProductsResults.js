import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { fetchProductsStart } from '../../Redux/Products/products.actions';

import FormSelect from '../Elements/FormSelect/FormSelect';

import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import { addProduct } from '../../Redux/Cart/cart.action';
import Button from '../Elements/Button/Button';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const useStyles = makeStyles((theme) => ({
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardAcions: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
function ProductResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const classes = useStyles();

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

  const handleAddToCard = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push('/cart');
  };

  const configAddToCartBtn = {
    type: 'button',
    color: 'white',
    bg: 'black',
  };

  // const handleLoadMore = () => {
  //   dispatch(
  //     fetchProductsStart({
  //       filterType,
  //       startAfterDoc: queryDoc,
  //       persistProducts: data,
  //     })
  //   );
  // };

  return (
    <div>
      <FormSelect {...configFilters} />
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.productThumbnail}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Price: {card.productPrice}€
                  </Typography>

                  <Typography>Price: {card.productPrice}€</Typography>
                </CardContent>
                <CardActions className={classes.cardAcions}>
                  <Button
                    onClick={() => handleAddToCard(card)}
                    {...configAddToCartBtn}
                  >
                    Add to Card
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductResults;
