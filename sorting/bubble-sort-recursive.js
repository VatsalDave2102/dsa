/**
 * Recursive Bubble Sort - Repeatedly swaps adjacent elements if in wrong order
 * Time Complexity: O(n²) - Best: O(n), Average/Worst: O(n²)
 * Space Complexity: O(n) due to recursion stack
 * Algorithm:
 * 1. Compare adjacent elements and swap if needed
 * 2. After each pass, largest element bubbles to end
 * 3. Recursively sort remaining elements
 * @param {number[]} arr - Array to sort (modified in-place)
 * @param {number} n - Current size of array to sort
 */
function bubbleSortRecursive(arr, n) {
  if (n === 1) {
    return;
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return bubbleSortRecursive(arr, n - 1);
}

console.log(bubbleSortRecursive([5, 4, 2, 3, 1, 6], 6));
