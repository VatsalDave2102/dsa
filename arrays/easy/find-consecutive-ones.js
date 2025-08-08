/**
 * Finds the maximum number of consecutive 1s in a binary array.
 *
 * This function iterates through the array and counts consecutive occurrences
 * of 1s, keeping track of the maximum count encountered.
 *
 * @param {number[]} nums - An array of binary numbers (0s and 1s)
 * @returns {number} The maximum number of consecutive 1s found in the array
 *
 * @example
 * // Returns 4 (four consecutive 1s at the end)
 * findConsecutiveOnes([0, 1, 1, 1, 0, 0, 1, 1, 1, 1]);
 *
 * @example
 * // Returns 3 (three consecutive 1s in the middle)
 * findConsecutiveOnes([1, 1, 1, 0, 1, 1]);
 *
 * @example
 * // Returns 0 (no 1s in the array)
 * findConsecutiveOnes([0, 0, 0]);
 */
function findConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    }
    if (nums[i] === 0 || i === nums.length - 1) {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  }
  return maxCount;
}

console.log(findConsecutiveOnes([0, 1, 1, 1, 0, 0, 1, 1, 1, 1]));
