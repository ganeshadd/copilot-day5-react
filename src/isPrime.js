/**
 * Checks if a number is prime.
 * @param {number|bigint} n - The integer to check (Number or BigInt).
 * @returns {boolean} True if n is prime, false otherwise.
 * @throws {TypeError} If n is not an integer (Number or BigInt).
 */
function isPrime(n) {
  if (typeof n !== 'number' && typeof n !== 'bigint') {
    throw new TypeError('Input must be a Number or BigInt');
  }
  if (typeof n === 'number') {
    if (!Number.isInteger(n)) {
      throw new TypeError('Input number must be an integer');
    }
    if (!Number.isSafeInteger(n)) n = BigInt(n);
    else return isPrime(BigInt(n));
  }
  // n is BigInt
  if (n < 0n) return false; // negative numbers are not prime
  if (n <= 1n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  for (let i = 3n; i * i <= n; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

module.exports = isPrime;
