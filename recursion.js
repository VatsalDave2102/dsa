/**
 * Prints a name n times using recursion
 * @param {string} name - The name to print
 * @param {number} n - Number of times to print
 */
function printNTime(name, n) {
  if (n === 0) return;
  console.log(name);
  printNTime(name, n - 1);
}

/**
 * Prints numbers from i to n using recursion
 * @param {number} i - Starting number
 * @param {number} n - Ending number
 */
function printOneToN(i, n) {
  if (i > n) return;
  console.log(i);
  printOneToN(i + 1, n);
}

/**
 * Prints numbers from n to 1 using recursion
 * @param {number} n - Starting number
 */
function printNToOne(n) {
  if (n === 0) return;
  console.log(n);
  printNToOne(n - 1);
}

/**
 * Calculates the sum of numbers from 1 to n using recursion
 * @param {number} n - The upper limit number
 * @returns {number} Sum of numbers from 1 to n
 */
function printSumOfNNumbers(n) {
  if (n === 0) {
    return 0;
  }

  return n + printSumOfNNumbers(n - 1);
}

/**
 * Calculates factorial of a number using recursion
 * @param {number} n - The number to calculate factorial for
 * @returns {number} Factorial of n
 */
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

/**
 * Reverses an array using two pointers approach
 * @param {number} n - Length of the array
 * @param {any[]} arr - Array to reverse
 * @returns {any[]} Reversed array
 */
function reverseArray(n, arr) {
  let p1 = 0,
    p2 = n - 1;

  while (p1 < p2) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;

    p1++;
    p2--;
  }
  return arr;
}

/**
 * Checks if a string is palindrome using recursion
 * @param {number} i - Current index
 * @param {string} str - String to check
 * @returns {boolean} True if string is palindrome, false otherwise
 */
function isPalindrome(i, str) {
  if (i > str.length / 2) {
    return true;
  }

  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }

  return isPalindrome(i + 1, str);
}

/**
 * Calculates the nth Fibonacci number using recursion
 * @param {number} n - Position in Fibonacci sequence
 * @returns {number} The nth Fibonacci number
 */
function fibonacci(n) {
  if (n === 0) {
    return n;
  }
  if (n === 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
