import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  addProductStart,
  deleteProductStart,
  fetchProductsStart,
} from '../../Redux/Products/products.actions';

import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Button from '../../Components/Elements/Button/Button';
import FormSelect from '../../Components/Elements/FormSelect/FormSelect';
import FormInput from '../../Components/Elements/Form/Form';
import Modal from '../../Components/Modal/Modal';
import { CKEditor } from 'ckeditor4-react';
import LoadMore from '../../Components/Loadmore/Loadmore';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = () => {
  const { products } = useSelector(mapState);
  const { data, isLastPage, queryDoc } = products;
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('vasen');
  const [bestseller, setBestseller] = useState('noBestseller');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [thirdImage, setThirdImage] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState('');

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

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

  const classes = useStyles();

  const resetForm = () => {
    setProductCategory('vasen');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setHideModal(true);
    setProductDescription('');
  };

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let thumbnailArray = [productThumbnail, secondImage, thirdImage];
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDescription,
        secondImage,
        bestseller,
        thumbnailArray,
      })
    );
    resetForm();
  };
  const configAddToCartBtn = {
    type: 'button',
    color: 'white',
    bg: 'black',
  };
  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };
  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <MainDiv>
      <HeaderDiv>
        <h1>Admin Page</h1>
        <CallToActionDiv>
          <button bg="black " color="white" onClick={() => toggleModal()}>
            Add new product
          </button>
        </CallToActionDiv>
      </HeaderDiv>
      <Modal {...configModal}>
        <div>
          <h1>My Admin</h1>
          <form onSubmit={handleSubmit}>
            <FormSelect
              label="Category"
              options={[
                {
                  value: 'vasen',
                  name: 'Vasen',
                },
                {
                  value: 'andere',
                  name: 'Andere',
                },
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />
            <FormInput
              label="Name"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              onChange={(e) => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="2nd Image"
              type="url"
              value={secondImage}
              onChange={(e) => setSecondImage(e.target.value)}
            />
            <FormInput
              label="3rd Image"
              type="url"
              value={thirdImage}
              onChange={(e) => setThirdImage(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <FormSelect
              label="Category"
              options={[
                {
                  value: 'noBestseller',
                  name: 'noBestseller',
                },
                {
                  value: 'bestseller',
                  name: 'bestseller',
                },
              ]}
              handleChange={(e) => setBestseller(e.target.value)}
            />
            <CKEditor
              onChange={(evt) => setProductDescription(evt.editor.getData())}
            ></CKEditor>
            <br />
            <button type="submit">Add product</button>
          </form>
        </div>
      </Modal>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {console.log(data)}
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.productThumbnail}
                    title="Image title"
                  />
                  {card.secondImage && (
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.secondImage}
                      title="Image title"
                    />
                  )}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Price: {card.productPrice}€
                    </Typography>

                    <Typography>Price: {card.productPrice}€</Typography>
                    <button
                      {...configAddToCartBtn}
                      onClick={() =>
                        dispatch(deleteProductStart(card.documentID))
                      }
                    >
                      Delete
                    </button>
                  </CardContent>
                  <CardActions className={classes.cardAcions}></CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
        {!isLastPage && <LoadMore {...configLoadMore} />}
      </Container>
    </MainDiv>
  );
};

export default Admin;

const CallToActionDiv = styled.div`
  width: 15rem;
  padding-top: 23em;
`;

const MainDiv = styled.div`
  background-color: white;
  width: 50%;
  margin: 0 auto;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
  align-items: center;
  margin: 0 auto;
  width: 50%;
`;
