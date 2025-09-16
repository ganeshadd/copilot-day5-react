
//Optimize this React component to avoid unnecessary re-renders while preserving accessibility; add tests or a simple story that demonstrates reduced renders

import React, { useMemo, useCallback, useRef } from 'react';

/*
 Smelly component: does heavy computation in render and recreates callbacks inline leading to unnecessary re-renders.
 Purpose: Ask Copilot to optimize with useMemo/useCallback/React.memo and preserve accessibility.
*/
const ProductList = React.memo(function ProductList({ items }) {
  const renderCount = useRef(0);
  renderCount.current++;
  // Memoize heavy computation
  const heavy = useMemo(() => {
    let val = 0;
    for (let i = 0; i < 500000; i++) {
      val += i % 7;
    }
    return val;
  }, []);

  // Memoize click handler
  const handleClick = useCallback((it) => {
    console.log('clicked', it);
  }, []);

  return (
    <div>
      <div data-testid="render-count">{renderCount.current}</div>
      <h2>Products</h2>
      <ul>
        {items.map((it, idx) => (
          <li key={idx}>
            <button onClick={() => handleClick(it)} aria-label={`Select product ${it}`}>{it}</button>
          </li>
        ))}
      </ul>
      {/* Show heavy computation result for demo */}
      <div aria-live="polite" style={{fontSize: '0.8em', color: '#888'}}>Heavy: {heavy}</div>
    </div>
  );
});

export default ProductList;
