import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { Container, CardActions, Button } from '@material-ui/core';
import App from './App';
import ButtonAppBar from './ButtonAppBar';
import ShoppingCart from './ShoppingCart';
import ProductCard from './ProductCard';

describe('<App />', () => {
  test('renders button app bar', () => {
    const shallow = createShallow();

    const app = shallow(<App />);

    expect(app.find(ButtonAppBar).length).toBe(1);
  });

  test('renders container', () => {
    const shallow = createShallow();

    const app = shallow(<App />);

    expect(app.find(Container).length).toBe(1);
  });

  test('renders shopping cart', () => {
    const shallow = createShallow();

    const app = shallow(<App />);

    expect(app.find(ShoppingCart).length).toBe(1);
  });

  test('renders product cards', () => {
    const mount = createMount();

    const app = mount(<App />);

    expect(app.find(ProductCard).length).toBe(5);
  });

  test('removes a product from list when added to shopping cart', () => {
    const mount = createMount();

    const app = mount(<App />);

    app
      .find(ProductCard)
      .find(CardActions)
      .find(Button)
      .first()
      .simulate('click');

    expect(app.find(ProductCard).length).toBe(4);
  });
});
