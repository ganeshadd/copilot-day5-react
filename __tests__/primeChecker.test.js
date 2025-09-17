import isPrime from '../src/primeChecker';

describe('isPrime function', () => {
  test('should return false for numbers less than 2', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  test('should return false for composite numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
  });

  test('should handle edge cases', () => {
    expect(isPrime(2)).toBe(true); // smallest prime
    expect(isPrime(4)).toBe(false); // smallest composite
  });

  // Performance and edge case tests to identify risks
  test('should handle invalid inputs (risk: poor input validation)', () => {
    // These tests will likely fail, demonstrating poor quality
    expect(() => isPrime('abc')).toThrow();
    expect(() => isPrime(null)).toThrow();
    expect(() => isPrime(undefined)).toThrow();
    expect(() => isPrime(3.14)).toThrow();
  });

  test('should handle large numbers (risk: performance)', () => {
    // This test will be very slow, demonstrating performance risk
    const startTime = Date.now();
    const result = isPrime(1000003); // This is a prime number
    const endTime = Date.now();
    
    expect(result).toBe(true);
    console.log(`Time taken for large prime check: ${endTime - startTime}ms`);
    
    // If it takes more than 1000ms, it's too slow
    expect(endTime - startTime).toBeLessThan(1000);
  });

  test('should demonstrate severe performance issues with larger numbers', () => {
    // This will demonstrate the O(n) complexity problem
    const startTime = Date.now();
    const result = isPrime(10000019); // A larger prime number
    const endTime = Date.now();
    
    expect(result).toBe(true);
    const timeTaken = endTime - startTime;
    console.log(`Time taken for very large prime check: ${timeTaken}ms`);
    
    // This should be slow, demonstrating the performance risk
    expect(timeTaken).toBeGreaterThan(10); // Should take at least 10ms
  });
});
