/**
 * Finds the largest element in an array
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(1) - Only using constant extra space
 * Algorithm:
 * 1. Initialize max with first element
 * 2. Traverse array comparing each element with max
 * 3. Update max if current element is larger
 * @param {number[]} arr - Input array
 * @returns {number} The largest element in the array
 */
function largestElementInArray(arr) {
  let max = arr[0];
  for (const element of arr) {
    if (max < element) {
      max = element;
    }
  }

  return max;
}

console.log(largestElementInArray([4, 5, 6, 3, 1, 7, 8]));
