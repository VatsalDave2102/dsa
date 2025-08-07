/**
 * Removes duplicates from a sorted array using two pointers
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(1) - Only using constant extra space
 * Algorithm:
 * 1. Use two pointers i and j
 * 2. When elements differ, move unique element to position i+1
 * 3. Return slice of array with unique elements
 * @param {number[]} arr - Sorted array with duplicates
 * @returns {number[]} Array with duplicates removed
 */
function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}

console.log(removeDuplicates([0, 1, 1, 1, 1, 2, 4, 5]));
