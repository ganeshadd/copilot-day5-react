import isPrime from '../src/primeCheckerImproved';

describe('isPrime function (Improved Version)', () => {
  test('should return false for numbers less than 2', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-10)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
  });

  test('should return false for composite numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(25)).toBe(false);
  });

  test('should handle edge cases correctly', () => {
    expect(isPrime(2)).toBe(true); // smallest prime
    expect(isPrime(4)).toBe(false); // smallest composite
    expect(isPrime(1)).toBe(false); // 1 is not prime
  });

  test('should validate input types and throw appropriate errors', () => {
    expect(() => isPrime('abc')).toThrow('Input must be a number');
    expect(() => isPrime(null)).toThrow('Input must be a number');
    expect(() => isPrime(undefined)).toThrow('Input must be a number');
    expect(() => isPrime({})).toThrow('Input must be a number');
    expect(() => isPrime([])).toThrow('Input must be a number');
  });

  test('should handle non-integer inputs', () => {
    expect(() => isPrime(3.14)).toThrow('Input must be an integer');
    expect(() => isPrime(2.5)).toThrow('Input must be an integer');
    // Note: 1.0 is actually an integer in JavaScript, so it should not throw
    expect(isPrime(1.0)).toBe(false); // 1.0 is treated as integer 1
  });

  test('should handle special number values', () => {
    expect(() => isPrime(NaN)).toThrow('Input must be a finite number');
    expect(() => isPrime(Infinity)).toThrow('Input must be a finite number');
    expect(() => isPrime(-Infinity)).toThrow('Input must be a finite number');
  });

  test('should demonstrate improved performance', () => {
    // Test with a large prime number
    const startTime = Date.now();
    const result = isPrime(10000019); // A large prime number
    const endTime = Date.now();
    
    expect(result).toBe(true);
    const timeTaken = endTime - startTime;
    console.log(`Improved version time for large prime: ${timeTaken}ms`);
    
    // Should be much faster than the O(n) version
    expect(timeTaken).toBeLessThan(50); // Should be very fast
  });

  test('should handle very large numbers efficiently', () => {
    // Test with an even larger number
    const startTime = Date.now();
    const result = isPrime(100000007); // Another large prime
    const endTime = Date.now();
    
    expect(result).toBe(true);
    const timeTaken = endTime - startTime;
    console.log(`Improved version time for very large prime: ${timeTaken}ms`);
    
    // Should still be fast due to O(√n) complexity
    expect(timeTaken).toBeLessThan(100);
  });

  test('should correctly identify large composite numbers', () => {
    const startTime = Date.now();
    const result = isPrime(100000000); // Large composite number
    const endTime = Date.now();
    
    expect(result).toBe(false);
    const timeTaken = endTime - startTime;
    console.log(`Improved version time for large composite: ${timeTaken}ms`);
    
    // Should be very fast since it finds a factor early
    expect(timeTaken).toBeLessThan(10);
  });
});
