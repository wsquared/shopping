import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { AppBar, Toolbar } from '@material-ui/core';
import ButtonAppBar from './ButtonAppBar';
import { Product } from './product.d';
import ShoppingCart from './ShoppingCart';

describe('<ButtonAppBar />', () => {
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

  test('renders app bar', () => {
    const shallow = createShallow();

    const buttonAppBar = shallow(
      <ButtonAppBar
        cartItems={[productDummy]}
        onRemoveFromCart={addToCartSpy}
      />
    );

    expect(buttonAppBar.find(AppBar).length).toBe(1);
  });

  test('renders toolbar', () => {
    const shallow = createShallow();

    const buttonAppBar = shallow(
      <ButtonAppBar
        cartItems={[productDummy]}
        onRemoveFromCart={addToCartSpy}
      />
    );

    expect(buttonAppBar.find(Toolbar).length).toBe(1);
  });

  test('renders shopping cart', () => {
    const shallow = createShallow();

    const buttonAppBar = shallow(
      <ButtonAppBar
        cartItems={[productDummy]}
        onRemoveFromCart={addToCartSpy}
      />
    );

    expect(buttonAppBar.find(ShoppingCart).length).toBe(1);
  });
});
