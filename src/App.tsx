import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './ButtonAppBar';
import ProductCards from './ProductCards';
import ShoppingCart from './ShoppingCart';
import * as ProductsAPI from './ProductApi';
import { Product } from './product.d';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar: {
      paddingTop: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [products, addProducts] = useState<Product[]>([]);
  const [cartItems, addToCart] = useState<Product[]>([]);

  useEffect(() => {
    const mobiles = ProductsAPI.getAll().map((p) => {
      return {
        productId: uuidv4(),
        name: p.productName,
        imageUrl: p.productImage,
        price: p.price,
        isPublished: p.isPublished,
      };
    });

    if (!mobiles) {
      return;
    }
    addProducts(() => mobiles);
  }, []);

  const onAddToCart = (product: Product) => {
    if (!product) {
      return;
    }

    addProducts(products.filter((p) => p.productId !== product.productId));
    addToCart([...cartItems, product]);
  };

  const onRemoveFromCart = (product: Product) => {
    if (!product) {
      return;
    }

    addProducts(() => [...products, product]);
    addToCart(() => cartItems.filter((p) => p.productId !== product.productId));
  };

  return (
    <>
      <ButtonAppBar cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
      <CssBaseline />
      <Container className={classes.bar} maxWidth="xl">
        <Grid container>
          <Grid container xs={12} sm={12} md={9} lg={9} xl={9} spacing={1}>
            <ProductCards onAddToCart={onAddToCart} products={products} />
          </Grid>
          <Hidden only={['xs', 'sm']}>
            <Grid container md={3} lg={3} xl={3} spacing={1}>
              <ShoppingCart
                cartItems={cartItems}
                onRemoveFromCart={onRemoveFromCart}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
};

export default App;
