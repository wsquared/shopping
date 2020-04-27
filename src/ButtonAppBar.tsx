import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Product } from './product.d';
import ShoppingCart from './ShoppingCart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

type ButtonAppBarProps = {
  cartItems: Product[];
  onRemoveFromCart: (product: Product) => void;
};

const ButtonAppBar = ({ cartItems, onRemoveFromCart }: ButtonAppBarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Will&apos;s mobile shop
          </Typography>
          <Hidden only={['md', 'lg', 'xl']}>
            <ShoppingCart
              cartItems={cartItems}
              onRemoveFromCart={onRemoveFromCart}
              isMenu
            />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
