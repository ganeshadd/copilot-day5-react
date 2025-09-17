import React, { useMemo, useCallback, memo, useRef } from 'react';

/*
 Optimized component: uses useMemo for heavy computation, useCallback for stable references, and React.memo for preventing unnecessary re-renders.
 Purpose: Ask Copilot to optimize with useMemo/useCallback/React.memo and preserve accessibility.
*/
const ProductList = memo(function ProductList({ items }) {
  // Track render count to demonstrate optimization effectiveness
  const renderCount = useRef(0);
  renderCount.current++;

  // Memoize heavy computation to avoid recalculating on every render
  const heavyComputation = useMemo(() => {
    let heavy = 0;
    for (let i = 0; i < 500000; i++) {
      heavy += i % 7;
    }
    return heavy;
  }, []); // Empty dependency array since computation doesn't depend on props

  // Memoize the click handler to prevent child re-renders
  const handleItemClick = useCallback(item => {
    console.log('clicked', item);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <p>
        Render count: {renderCount.current} | Heavy computation result:{' '}
        {heavyComputation}
      </p>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <button onClick={() => handleItemClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

ProductList.displayName = 'ProductList';

export default ProductList;
