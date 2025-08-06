/**
 * Insertion Sort - Builds sorted array one element at a time
 * Time Complexity: O(n²) - Best: O(n), Average/Worst: O(n²)
 * Space Complexity: O(1)
 * Algorithm:
 * 1. Start with second element
 * 2. Compare with previous elements
 * 3. Insert at correct position by shifting
 * @param {number[]} arr - Array to sort (default: empty array)
 * @returns {number[]} Sorted array
 */
function insertionSort(arr = []) {
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}
