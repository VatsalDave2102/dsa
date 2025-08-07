/**
 * Checks if an array is sorted in ascending order
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(1) - Only using constant extra space
 * Algorithm:
 * 1. Compare each element with the next one
 * 2. If any element is greater than next, return false
 * 3. If all comparisons pass, return true
 * @param {number[]} arr - Input array to check
 * @returns {boolean} True if array is sorted, false otherwise
 */
function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isArraySorted([1, 2, 3, 4, 3]));
