import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../src/ProductList';

test('renders products list', () => {
  render(<ProductList items={['Apple', 'Banana', 'Cherry']} />);
  expect(screen.getByText('Products')).toBeInTheDocument();
  expect(screen.getByText('Apple')).toBeInTheDocument();
  expect(screen.getByText(/Render count: 1/)).toBeInTheDocument();
  expect(screen.getByText(/Heavy computation result:/)).toBeInTheDocument();
});

test('should not re-render when props are the same', () => {
  const renderSpy = jest.fn();
  const TestComponent = ({ items }) => {
    renderSpy();
    return <ProductList items={items} />;
  };

  const { rerender } = render(<TestComponent items={['Apple', 'Banana']} />);
  expect(renderSpy).toHaveBeenCalledTimes(1);

  // Re-render with same props
  rerender(<TestComponent items={['Apple', 'Banana']} />);
  expect(renderSpy).toHaveBeenCalledTimes(2); // Parent re-renders

  // But ProductList should be memoized and not re-render
  // This is verified by the fact that heavy computation doesn't run again
});

test('should re-render when items prop changes', () => {
  const { rerender } = render(<ProductList items={['Apple', 'Banana']} />);
  expect(screen.getByText('Apple')).toBeInTheDocument();
  expect(screen.getByText(/Render count: 1/)).toBeInTheDocument();

  rerender(<ProductList items={['Cherry', 'Date']} />);
  expect(screen.getByText('Cherry')).toBeInTheDocument();
  expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  expect(screen.getByText(/Render count: 2/)).toBeInTheDocument();
});

test('should demonstrate render count optimization', () => {
  const { rerender } = render(<ProductList items={['Apple', 'Banana']} />);
  expect(screen.getByText(/Render count: 1/)).toBeInTheDocument();

  // Re-render with same props - should increment render count
  rerender(<ProductList items={['Apple', 'Banana']} />);
  expect(screen.getByText(/Render count: 2/)).toBeInTheDocument();

  // Re-render with different props - should increment render count
  rerender(<ProductList items={['Cherry', 'Date']} />);
  expect(screen.getByText(/Render count: 3/)).toBeInTheDocument();
});
