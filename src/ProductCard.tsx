import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Product } from './product.d';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    media: {
      margin: 'auto',
      display: 'block',
      backgroundSize: 'contain',
      height: '10em',
    },
    content: {
      textAlign: 'center',
    },
    header: {
      textAlign: 'center',
    },
    action: {
      display: 'block',
      textAlign: 'center',
    },
  })
);

type ProductCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  const classes = useStyles();
  const itemPrice = product.price ? `$${product.price}` : '';

  return (
    <Card className={classes.root}>
      <CardHeader title={product.name || ''} className={classes.header} />
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.name || ''}
      />
      <CardContent>
        <Typography
          className={classes.content}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {itemPrice}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
