/**
 * Recursive Insertion Sort - Builds sorted array one element at a time
 * Time Complexity: O(n²) - Best: O(n), Average/Worst: O(n²)
 * Space Complexity: O(n) due to recursion stack
 * Algorithm:
 * 1. Sort first n-1 elements recursively
 * 2. Insert nth element at correct position
 * 3. Shift elements as needed
 * @param {number[]} arr - Array to sort (modified in-place)
 * @param {number} n - Current index to insert
 * @returns {number[]} Sorted array
 */
function insertionSortRecursive(arr, n) {
  if (n === arr.length) {
    return arr;
  }

  for (let i = n; i > 0 && arr[i - 1] > arr[i]; i--) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }
  return insertionSortRecursive(arr, n + 1);
}

console.log(insertionSortRecursive([4, 3, 2, 6, 7, 1], 0));
