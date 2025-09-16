import React, { useState } from 'react';
import ProductList from './ProductList';

let renderCount = 0;

export default function ProductListStory() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Carrot']);
  renderCount++;

  return (
    <div>
      <h1>ProductList Render Demo</h1>
      <div>Render count: <b>{renderCount}</b></div>
      <ProductList items={items} />
      <button onClick={() => setItems([...items, 'New'])}>Add Product</button>
    </div>
  );
}
