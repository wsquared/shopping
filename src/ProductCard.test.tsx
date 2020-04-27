import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import { CardActions, CardHeader } from '@material-ui/core';
import ProductCard from './ProductCard';
import { Product } from './product.d';

describe('<ProductCard />', () => {
  let productDummy: Product;
  let addToCartSpy: (product: Product) => void;

  beforeEach(() => {
    productDummy = {
      name: 'foo',
      price: '10',
      imageUrl: 'https://www.foo.com',
      productId: '123',
      isPublished: 'true',
    };

    addToCartSpy = jest.fn();
  });

  test('renders title', () => {
    const mount = createMount();

    const productCard = mount(
      <ProductCard product={productDummy} addToCart={addToCartSpy} />
    );

    expect(productCard.find(CardHeader).text()).toBe('foo');
  });

  test('renders button', () => {
    const shallow = createShallow({ untilSelector: 'CardActions' });

    const productCard = shallow(
      <ProductCard product={productDummy} addToCart={addToCartSpy} />
    );

    expect(productCard.find(CardActions).text()).toBe('Add to cart');
  });

  test('click adds product', () => {
    const mount = createMount();

    const productCard = mount(
      <ProductCard product={productDummy} addToCart={addToCartSpy} />
    );

    productCard.find(CardActions).find('button').simulate('click');

    expect(addToCartSpy).toHaveBeenCalledWith(productDummy);
  });
});
