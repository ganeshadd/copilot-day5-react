
import React, { useMemo, useCallback } from 'react';

/*
 Optimized component: Uses useMemo for heavy computation, useCallback for stable references,
 and React.memo for preventing unnecessary re-renders while preserving accessibility.
*/
const ProductList = React.memo(function ProductList({ items }) {
  // Memoize heavy computation to avoid recalculating on every render
  const heavyComputationResult = useMemo(() => {
    let heavy = 0;
    for (let i = 0; i < 500000; i++) {
      heavy += i % 7;
    }
    return heavy;
  }, []); // Empty dependency array since computation doesn't depend on props

  // Memoize click handler to prevent creating new functions on each render
  const handleItemClick = useCallback((item) => {
    console.log('clicked', item);
  }, []); // Empty dependency array since the handler logic doesn't depend on changing values

  // Memoize the rendered list items to avoid recreating them unnecessarily
  const listItems = useMemo(() => {
    return items.map((item, idx) => (
      <li key={`product-${idx}`}>
        <button 
          onClick={() => handleItemClick(item)}
          aria-label={`Select ${item}`}
          type="button"
        >
          {item}
        </button>
      </li>
    ));
  }, [items, handleItemClick]); // Depend on items and the memoized click handler

  return (
    <div>
      <h2>Products</h2>
      <ul role="list" aria-label="Product list">
        {listItems}
      </ul>
      {/* Optional: Display heavy computation result if needed for debugging */}
      {/* <div style={{ display: 'none' }}>Heavy computation result: {heavyComputationResult}</div> */}
    </div>
  );
});

export default ProductList;
