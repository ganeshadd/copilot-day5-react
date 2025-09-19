import React from 'react';
import { render, screen } from '@testing-library/react';
import { isPrimeImproved } from '../src/ProductList';

// Original Copilot version for comparison
function isPrimeCopilotVersion(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

describe('isPrime Copilot Version - Risk Analysis', () => {
  test('basic functionality works for small numbers', () => {
    expect(isPrimeCopilotVersion(2)).toBe(true);
    expect(isPrimeCopilotVersion(3)).toBe(true);
    expect(isPrimeCopilotVersion(4)).toBe(false);
    expect(isPrimeCopilotVersion(5)).toBe(true);
  });

  test('RISK: Performance issue with large numbers', () => {
    const startTime = Date.now();
    isPrimeCopilotVersion(10007); // Large prime number
    const endTime = Date.now();
    console.log(`Time taken for isPrime(10007): ${endTime - startTime}ms`);
    // This will be slow due to O(n) complexity
  });

  test('RISK: No input validation - handles invalid inputs poorly', () => {
    // These should be handled gracefully but aren't
    // DEMONSTRATED RISK: String "5" incorrectly returns true due to type coercion
    expect(isPrimeCopilotVersion("5")).toBe(true); // String input - WRONG BEHAVIOR!
    expect(isPrimeCopilotVersion(5.5)).toBe(true); // Decimal input - ALSO WRONG BEHAVIOR!
    expect(isPrimeCopilotVersion(null)).toBe(false); // Null input - correctly returns false due to < 2 check
    expect(isPrimeCopilotVersion(undefined)).toBe(true); // Undefined input - WRONG! Returns true because loop never runs
    expect(isPrimeCopilotVersion(-5)).toBe(false); // Negative input
    
    // Multiple input validation risks demonstrated
    console.log('RISK DEMONSTRATED: isPrime("5") returns:', isPrimeCopilotVersion("5"));
    console.log('RISK DEMONSTRATED: isPrime(5.5) returns:', isPrimeCopilotVersion(5.5));
    console.log('RISK DEMONSTRATED: isPrime(undefined) returns:', isPrimeCopilotVersion(undefined));
  });

  test('RISK: Edge cases not properly handled', () => {
    expect(isPrimeCopilotVersion(0)).toBe(false);
    expect(isPrimeCopilotVersion(1)).toBe(false);
    expect(isPrimeCopilotVersion(-2)).toBe(false);
  });
});

describe('isPrimeImproved - Risk Mitigations', () => {
  test('basic functionality works correctly', () => {
    expect(isPrimeImproved(2)).toBe(true);
    expect(isPrimeImproved(3)).toBe(true);
    expect(isPrimeImproved(4)).toBe(false);
    expect(isPrimeImproved(5)).toBe(true);
    expect(isPrimeImproved(97)).toBe(true);
    expect(isPrimeImproved(100)).toBe(false);
  });

  test('IMPROVEMENT: Input validation prevents type coercion risks', () => {
    expect(() => isPrimeImproved("5")).toThrow('Input must be a non-negative integer');
    expect(() => isPrimeImproved(5.5)).toThrow('Input must be a non-negative integer');
    expect(() => isPrimeImproved(null)).toThrow('Input must be a non-negative integer');
    expect(() => isPrimeImproved(undefined)).toThrow('Input must be a non-negative integer');
    expect(() => isPrimeImproved(-5)).toThrow('Input must be a non-negative integer');
    expect(() => isPrimeImproved(NaN)).toThrow('Input must be a non-negative integer');
  });

  test('IMPROVEMENT: Performance optimization for large numbers', () => {
    const startTime = Date.now();
    expect(isPrimeImproved(10007)).toBe(true); // Large prime number
    const endTime = Date.now();
    console.log(`Time taken for isPrimeImproved(10007): ${endTime - startTime}ms`);
    
    // Test even larger number to show O(√n) efficiency
    const startTime2 = Date.now();
    expect(isPrimeImproved(982451653)).toBe(true); // Much larger prime
    const endTime2 = Date.now();
    console.log(`Time taken for isPrimeImproved(982451653): ${endTime2 - startTime2}ms`);
  });

  test('IMPROVEMENT: Edge cases handled explicitly', () => {
    expect(isPrimeImproved(0)).toBe(false);
    expect(isPrimeImproved(1)).toBe(false);
    expect(isPrimeImproved(2)).toBe(true);
  });

  test('IMPROVEMENT: Comprehensive test coverage', () => {
    // Test first 20 primes
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
    primes.forEach(prime => {
      expect(isPrimeImproved(prime)).toBe(true);
    });

    // Test some composite numbers
    const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28];
    composites.forEach(composite => {
      expect(isPrimeImproved(composite)).toBe(false);
    });
  });
});
