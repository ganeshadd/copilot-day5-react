
import React from 'react';

/*
 Smelly component: does heavy computation in render and recreates callbacks inline leading to unnecessary re-renders.
 Purpose: Ask Copilot to optimize with useMemo/useCallback/React.memo and preserve accessibility.
*/
export default function ProductList({ items }) {
  // heavy computation in render
  let heavy = 0;
  for (let i = 0; i < 500000; i++) {
    heavy += i % 7;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {items.map((it, idx) => (
          // inline arrow handler recreated each render -> causes children re-renders
          <li key={idx}>
            <button onClick={() => console.log('clicked', it)}>{it}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
