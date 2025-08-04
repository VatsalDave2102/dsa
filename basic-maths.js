/**
 * Counts the number of digits in a number using logarithm
 * @param {number} number - The number to count digits for
 * @returns {number} Number of digits
 */
function countDigits(number) {
  let count = Math.floor(Math.log10(number) + 1);
  return count;
}

const number = 12345;
countDigits(number);

/**
 * Reverses the digits of a number
 * @param {number} number - The number to reverse
 * @returns {number} The reversed number
 */
function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }
  return reverse;
}
reverseNumber(12345);

/**
 * Checks if a number is a palindrome
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is palindrome, false otherwise
 */
function isPalindrome(number) {
  let reverse = reverseNumber(number);
  return reverse === number;
}

/**
 * Finds the Greatest Common Divisor (GCD) of two numbers using Euclidean algorithm
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} GCD of the two numbers
 */
function findGCD(num1, num2) {
  while (num1 > 0 && num2 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  if (num1 === 0) {
    return num2;
  }

  return num1;
}

/**
 * Checks if a number is prime
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
