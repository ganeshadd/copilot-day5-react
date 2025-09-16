
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../src/ProductList';

test('renders products list', () => {
  render(<ProductList items={['Apple', 'Banana', 'Cherry']} />);
  expect(screen.getByText('Products')).toBeInTheDocument();
  expect(screen.getByText('Apple')).toBeInTheDocument();
});
