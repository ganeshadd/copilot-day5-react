/*
 Improved implementation addressing the risks identified in Copilot's suggestion:
 
 Risks addressed:
 1. Performance: O(n) -> O(√n) by only checking up to √n
 2. Input validation: Added proper type checking and validation
 3. Edge cases: Handle non-integers, negative numbers, etc.
 4. Error handling: Proper error messages for invalid inputs
*/

/**
 * Check if a number is prime (improved version)
 * @param {number} n - The number to check
 * @returns {boolean} - True if prime, false otherwise
 * @throws {Error} - If input is invalid
 */
function isPrime(n) {
  // Input validation
  if (typeof n !== 'number') {
    throw new Error('Input must be a number');
  }
  
  if (isNaN(n) || !isFinite(n)) {
    throw new Error('Input must be a finite number');
  }
  
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  
  // Handle edge cases
  if (n < 2) return false;
  if (n === 2) return true; // 2 is the only even prime
  if (n % 2 === 0) return false; // Even numbers > 2 are not prime
  
  // Only check odd divisors up to √n (performance optimization)
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

export default isPrime;
