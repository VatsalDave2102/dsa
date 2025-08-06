/**
 * Merge Sort - Divide and conquer sorting algorithm
 * Time Complexity: O(n log n) - Best, Average, Worst
 * Space Complexity: O(n)
 * Algorithm:
 * 1. Divide array into two halves
 * 2. Recursively sort both halves
 * 3. Merge the sorted halves
 * @param {number[]} arr - Array to sort
 * @returns {number[]} Sorted array
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

/**
 * Merges two sorted arrays into one sorted array
 * @param {number[]} left - Left sorted array
 * @param {number[]} right - Right sorted array
 * @returns {number[]} Merged sorted array
 */
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([4, 3, 2, 6, 3, 6]));
