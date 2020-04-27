import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import { Product } from './product.d';

type ProductCardProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductCards = ({ onAddToCart, products }: ProductCardProps) => {
  return (
    <>
      {products.map((product: Product) => {
        if (product.isPublished === 'false') {
          return undefined;
        }

        return (
          <Grid item md={4} sm={6} xs={12} key={product.productId}>
            <ProductCard product={product} addToCart={onAddToCart} />
          </Grid>
        );
      })}
    </>
  );
};

export default ProductCards;
