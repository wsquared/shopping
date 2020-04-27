import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Grid, MenuItem, ListItem, Badge, IconButton } from '@material-ui/core';
import ShoppingCart from './ShoppingCart';
import { Product } from './product.d';

describe('<ShoppingCart />', () => {
  let productDummy: Product;
  let removeFromCartSpy: (product: Product) => void;

  beforeEach(() => {
    productDummy = {
      name: 'foo',
      price: '10',
      imageUrl: 'https://www.foo.com',
      productId: '123',
      isPublished: 'true',
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    removeFromCartSpy = jest.fn();
  });

  test('renders grid', () => {
    const shallow = createShallow();

    const shoppingCart = shallow(
      <ShoppingCart
        cartItems={[productDummy]}
        onRemoveFromCart={removeFromCartSpy}
      />
    );

    expect(shoppingCart.find(Grid).length).toBeGreaterThanOrEqual(1);
  });

  test('renders list item when not a menu', () => {
    const shallow = createShallow();

    const shoppingCart = shallow(
      <ShoppingCart
        cartItems={[productDummy]}
        onRemoveFromCart={removeFromCartSpy}
      />
    );

    expect(shoppingCart.find(ListItem).length).toBeGreaterThanOrEqual(1);
  });

  test('renders menu item when a menu', () => {
    const shallow = createShallow();

    const shoppingCart = shallow(
      <ShoppingCart
        cartItems={[productDummy]}
        onRemoveFromCart={removeFromCartSpy}
        isMenu
      />
    );

    expect(shoppingCart.find(MenuItem).length).toBeGreaterThanOrEqual(1);
  });

  test('renders a badge an item in menu', () => {
    const shallow = createShallow();

    const shoppingCart = shallow(
      <ShoppingCart
        cartItems={[productDummy]}
        onRemoveFromCart={removeFromCartSpy}
        isMenu
      />
    );

    expect(shoppingCart.find(Badge).length).toBeGreaterThanOrEqual(1);
  });

  test('click delete icon calls removeFromCart in menu', () => {
    const shallow = createShallow();

    const shoppingCart = shallow(
      <ShoppingCart
        cartItems={[productDummy]}
        onRemoveFromCart={removeFromCartSpy}
        isMenu
      />
    );

    shoppingCart.find(IconButton).simulate('click');

    expect(removeFromCartSpy).toHaveBeenCalledWith(productDummy);
  });

  test('click delete icon calls removeFromCart', () => {
    const shallow = createShallow();

    const shoppingCart = shallow(
      <ShoppingCart
        cartItems={[productDummy]}
        onRemoveFromCart={removeFromCartSpy}
      />
    );

    shoppingCart.find(IconButton).simulate('click');

    expect(removeFromCartSpy).toHaveBeenCalledWith(productDummy);
  });
});
