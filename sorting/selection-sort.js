/**
 * Selection Sort - Finds minimum element and places it at beginning
 * Time Complexity: O(n²) - Best, Average, Worst
 * Space Complexity: O(1)
 * Algorithm:
 * 1. Find minimum element in unsorted portion
 * 2. Swap with first unsorted element
 * 3. Move boundary of sorted portion
 * @param {number[]} arr - Array to sort (default: empty array)
 * @returns {number[]} Sorted array
 */
function selectionSort(arr = []) {
  if (!arr.length) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[low]) {
        low = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }
  return arr;
}
