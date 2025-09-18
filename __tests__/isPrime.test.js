  it('throws for non-integer and invalid types', () => {
    expect(() => isPrime('abc')).toThrow(TypeError);
    expect(() => isPrime(null)).toThrow(TypeError);
    expect(() => isPrime(undefined)).toThrow(TypeError);
    expect(() => isPrime({})).toThrow(TypeError);
    expect(() => isPrime([])).toThrow(TypeError);
    expect(() => isPrime(2.5)).toThrow(TypeError);
    expect(() => isPrime(NaN)).toThrow(TypeError);
    expect(() => isPrime(Infinity)).toThrow(TypeError);
  });
const isPrime = require('../src/isPrime');

describe('isPrime', () => {
  it('returns false for numbers <= 1', () => {
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-5n)).toBe(false);
    expect(isPrime(0n)).toBe(false);
    expect(isPrime(1n)).toBe(false);
  });

  it('returns true for 2 and 3', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(2n)).toBe(true);
    expect(isPrime(3n)).toBe(true);
  });

  it('returns false for even numbers > 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(4n)).toBe(false);
    expect(isPrime(10n)).toBe(false);
  });

  it('returns true for prime numbers', () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(97)).toBe(true);
    expect(isPrime(5n)).toBe(true);
    expect(isPrime(7n)).toBe(true);
    expect(isPrime(13n)).toBe(true);
    expect(isPrime(97n)).toBe(true);
  });

  it('returns false for non-prime numbers', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(100)).toBe(false);
    expect(isPrime(9n)).toBe(false);
    expect(isPrime(15n)).toBe(false);
    expect(isPrime(100n)).toBe(false);
  });

  it('works for extremely large integers', () => {
    // 2^61 - 1 is prime
    expect(isPrime(2305843009213693951n)).toBe(true);
    // 2^61 is not prime
    expect(isPrime(2305843009213693952n)).toBe(false);
    // Large composite
    expect(isPrime(9999999999999999999n)).toBe(false);
  // Remove incorrect large prime test
  });
});
