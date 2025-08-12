/**
 * Finds the longest subarray with sum equal to k using sliding window technique.
 *
 * This function uses a two-pointer approach (sliding window) to find a contiguous
 * subarray whose elements sum up to the target value k. It maintains a dynamic
 * window that expands when the sum is less than k and contracts when the sum
 * exceeds k. The algorithm works optimally for arrays with positive numbers.
 *
 * @param {number[]} nums - Array of positive integers
 * @param {number} k - Target sum to find in the subarray
 * @returns {number[]} The subarray elements that sum up to k, or the last valid subarray if no exact match
 */
function longestSubarray(nums, k) {
  let i = 0;
  let j = i + 1;
  let currentSum = nums[i] + nums[j];
  const result = [nums[i], nums[j]];
  while (j < nums.length) {
    if (currentSum === k) {
      return result;
    }
    if (currentSum > k) {
      currentSum -= nums[i];
      i++;
      result.shift();
    } else {
      j++;
      currentSum += nums[j];
      result.push(nums[j]);
    }
  }
  return result;
}

console.log(longestSubarray([6, 4, 2, 3, 4], 10));
