/*
 Copilot Prompt: "Write a function to check if a number is prime."
 
 This is the raw Copilot suggestion for the Day 6 AI Risk Assessment assignment.
*/

// Copilot's suggested implementation:
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export default isPrime;
