/**
 * Quick Sort - Divide and conquer algorithm using pivot partitioning
 * Time Complexity: O(n log n) - Best/Average, O(n²) - Worst
 * Space Complexity: O(log n) - recursion stack
 * Algorithm:
 * 1. Choose pivot element
 * 2. Partition array around pivot
 * 3. Recursively sort sub-arrays
 * @param {number[]} arr - Array to sort (modified in-place)
 * @returns {number[]} Sorted array
 */
function quickSort(arr) {
  qs(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Recursive quick sort helper function
 * @param {number[]} arr - Array to sort
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 */
function qs(arr, low, high) {
  if (low < high) {
    let partitionIndex = partition(arr, low, high);
    qs(arr, low, partitionIndex - 1);
    qs(arr, partitionIndex + 1, high);
  }
}

/**
 * Partitions array around pivot element
 * @param {number[]} arr - Array to partition
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 * @returns {number} Final position of pivot
 */
function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
}

console.log(quickSort([5, 4, 32, 2, 1]));
