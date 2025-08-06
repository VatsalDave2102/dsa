/**
 * Bubble Sort - Simple comparison-based sorting algorithm
 * Time Complexity: O(n²) - Best: O(n), Average/Worst: O(n²)
 * Space Complexity: O(1)
 * Algorithm:
 * 1. Compare adjacent elements
 * 2. Swap if they are in wrong order
 * 3. Repeat until no swaps needed
 * @param {number[]} arr - Array to sort (default: empty array)
 * @returns {number[]} Sorted array
 */
function bubbleSort(arr = []) {
  if (!arr.length) {
    return [];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
