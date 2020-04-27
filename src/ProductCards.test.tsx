import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Grid } from '@material-ui/core';
import ProductCards from './ProductCards';
import ProductCard from './ProductCard';
import { Product } from './product.d';

describe('<ProductCards />', () => {
  let addToCartDummy: (product: Product) => void;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addToCartDummy = () => {};
  });

  test('renders grid', () => {
    const shallow = createShallow();

    const productDummy = {
      name: 'foo',
      price: '10',
      imageUrl: 'https://www.foo.com',
      productId: '123',
      isPublished: 'true',
    };

    const productCards = shallow(
      <ProductCards products={[productDummy]} onAddToCart={addToCartDummy} />
    );

    expect(productCards.find(Grid).length).toBe(1);
  });

  test('renders is published product card', () => {
    const shallow = createShallow();

    const productDummy = {
      name: 'foo',
      price: '10',
      imageUrl: 'https://www.foo.com',
      productId: '123',
      isPublished: 'true',
    };
    const productCards = shallow(
      <ProductCards products={[productDummy]} onAddToCart={addToCartDummy} />
    );

    expect(productCards.find(ProductCard).length).toBe(1);
  });

  test('does not render unpublished product card', () => {
    const shallow = createShallow();

    const productDummy = {
      name: 'foo',
      price: '10',
      imageUrl: 'https://www.foo.com',
      productId: '123',
      isPublished: 'false',
    };
    const productCards = shallow(
      <ProductCards products={[productDummy]} onAddToCart={addToCartDummy} />
    );

    expect(productCards.find(ProductCard).length).toBe(0);
  });
});
