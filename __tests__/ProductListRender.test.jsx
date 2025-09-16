import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductList from '../src/ProductList';

import '@testing-library/jest-dom';

function RenderCounterProductList(props) {
  return <ProductList {...props} />;
}

describe('ProductList render optimization', () => {
  // No global renderCount needed

  it('does not re-render ProductList when unrelated state changes', () => {
    const items = ['Apple', 'Banana'];
    function Wrapper() {
      const [count, setCount] = React.useState(0);
      return (
        <div>
          <button onClick={() => setCount(c => c + 1)}>Inc</button>
          <RenderCounterProductList items={items} />
        </div>
      );
    }
  const { getByText, getByTestId } = render(<Wrapper />);
  expect(getByTestId('render-count').textContent).toBe('1');
  fireEvent.click(getByText('Inc'));
  expect(getByTestId('render-count').textContent).toBe('1'); // Should not re-render
  });

  it('re-renders ProductList only when items change', () => {
    function Wrapper() {
      const [items, setItems] = React.useState(['Apple', 'Banana']);
      return (
        <div>
          <button onClick={() => setItems([...items, 'Carrot'])}>Add</button>
          <RenderCounterProductList items={items} />
        </div>
      );
    }
  const { getByText, getByTestId } = render(<Wrapper />);
  expect(getByTestId('render-count').textContent).toBe('1');
  fireEvent.click(getByText('Add'));
  expect(getByTestId('render-count').textContent).toBe('2'); // Should re-render
  });
});
