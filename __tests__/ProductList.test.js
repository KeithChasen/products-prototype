import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ProductList from '../src/pages/ProductList';

const mockStore = configureStore([]);

describe('ProductList component testing', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      product: {
        products: [
          { number: '1', name: 'Test product 1' },
          { number: '2', name: 'Test product 2' },
        ],
      },
    });
  });

  test('renders Product list title', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Product list')).toBeInTheDocument();
  });

  test('renders products', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Test product 1')).toBeInTheDocument();
    expect(screen.getByText('Test product 2')).toBeInTheDocument();
  });
});