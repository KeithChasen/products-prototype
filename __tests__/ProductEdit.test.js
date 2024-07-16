import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductEdit from '../src/pages/ProductDetail/ProductEdit';

const mockStore = configureStore([]);

const mockProduct = {
    number: '1',
    name: 'Test Product',
    description: 'Test Product Description',
    images: [],
};

describe('ProductEdit page testing', () => {
    let store;
  
    beforeEach(() => {
      store = mockStore({
        product: {
          products: [mockProduct],
        },
      });
    });

    test('renders editing form', () => {
        render(
          <Provider store={store}>
            <ProductEdit product={mockProduct} setEditMode={jest.fn()} />
          </Provider>
        );
    
        expect(screen.getByLabelText('Product Name:')).toBeInTheDocument();
        expect(screen.getByLabelText('Product Description:')).toBeInTheDocument();
        expect(screen.getByText('Save')).toBeInTheDocument();
    });

    test('handles input change', () => {
        render(
          <Provider store={store}>
            <ProductEdit product={mockProduct} setEditMode={jest.fn()} />
          </Provider>
        );
    
        fireEvent.change(screen.getByLabelText('Product Name:'), {
          target: { value: 'Updated Product Name' },
        });
    
        expect(screen.getByLabelText('Product Name:').value).toBe('Updated Product Name');
    });
})