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

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = () => {
  const { products } = useSelector(mapState);
  const { data } = products;
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('vasen');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
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
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDescription,
      })
    );
    resetForm();
  };
  const configAddToCartBtn = {
    type: 'button',
    color: 'white',
    bg: 'black',
  };

  return (
    <MainDiv>
      <h1>Admin Page</h1>
      <CallToActionDiv>
        <Button onClick={() => toggleModal()}>Add new product</Button>
      </CallToActionDiv>
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
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <CKEditor
              onChange={(evt) => setProductDescription(evt.editor.getData())}
            ></CKEditor>
            <br />
            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
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
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Price: {card.productPrice}€
                    </Typography>

                    <Typography>Price: {card.productPrice}€</Typography>
                    <Button
                      {...configAddToCartBtn}
                      onClick={() =>
                        dispatch(deleteProductStart(card.documentID))
                      }
                    >
                      Delete
                    </Button>
                  </CardContent>
                  <CardActions className={classes.cardAcions}></CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </MainDiv>
  );
};

export default Admin;

const CallToActionDiv = styled.div`
  width: 15rem;
`;

const MainDiv = styled.div`
  background-color: black;
`;
