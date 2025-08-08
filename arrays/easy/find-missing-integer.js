/**
 * Finds the missing integer in an array containing consecutive numbers from 1 to n+1.
 *
 * This function uses the mathematical formula for the sum of first n natural numbers
 * to calculate what the sum should be, then compares it with the actual sum to find
 * the missing number. The algorithm runs in O(1) time complexity.
 *
 * @param {number[]} arr - An array of consecutive integers with one missing number
 * @returns {number} The missing integer from the sequence
 *
 * @example
 * // Returns 4 (missing number from sequence 1,2,3,5)
 * findMissingInteger([1, 2, 3, 5]);
 *
 * @example
 * // Returns 1 (missing number from sequence 2,3,4,5)
 * findMissingInteger([2, 3, 4, 5]);
 *
 * @example
 * // Returns 3 (missing number from sequence 1,2,4,5)
 * findMissingInteger([1, 2, 4, 5]);
 */
function findMissingInteger(arr) {
  const optimalSum = (arr.length * (arr.length + 1)) / 2;
  const actualSum = (arr.length * (arr.length - 1)) / 2;

  return optimalSum - actualSum;
}

console.log(findMissingInteger([1, 2, 3, 5]));
