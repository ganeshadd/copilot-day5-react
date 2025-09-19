
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

// COPILOT PROMPT: "Write a function to check if a number is prime."
// Let's ask Copilot to generate a prime checking function for us

// COPILOT GENERATED CODE (simulated) - REJECTED DUE TO RISKS:
// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// IMPROVED IMPLEMENTATION - Addressing identified risks:
/**
 * Checks if a number is prime with proper input validation and optimized algorithm
 * @param {number} n - The number to check
 * @returns {boolean} - True if the number is prime, false otherwise
 * @throws {Error} - If input is not a valid positive integer
 */
function isPrimeImproved(n) {
  // Input validation - addresses security and quality risks
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  
  // Handle edge cases explicitly
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  // Optimized algorithm - only check odd numbers up to √n
  // This reduces complexity from O(n) to O(√n)
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

export default ProductList;
export { isPrimeImproved };
