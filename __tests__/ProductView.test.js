import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductView from '../src/pages/ProductDetail/ProductView';

const testProduct = {
    name: 'Test Product',
    description: 'The description of a test product',
    images: []
};

describe('ProductView testing', () => {
    test('renders product details', () => {
        render(<ProductView product={testProduct} setEditMode={jest.fn()}/>);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('The description of a test product')).toBeInTheDocument();
    });

    test('renders Edit button', () => {
        render(<ProductView product={testProduct} setEditMode={jest.fn()} />);

        expect(screen.getByText('Edit')).toBeInTheDocument();
    });
    
      test('renders error message if product is not found', () => {
        render(<ProductView product={null} setEditMode={jest.fn()} />);
    
        expect(screen.getByText('OOOPS! Product Not Found!')).toBeInTheDocument();
      });
});