/**
 * Finds the union of two sorted arrays by removing duplicate elements.
 *
 * This function combines two sorted arrays and returns a new array containing
 * all unique elements from both arrays. It uses the Set data structure to
 * automatically handle duplicate removal. The resulting array maintains the
 * natural order of elements due to Set's insertion order preservation.
 *
 * @param {number[]} arr1 - The first sorted array
 * @param {number[]} arr2 - The second sorted array
 * @returns {number[]} A new array containing all unique elements from both input arrays
 *
 * @example
 * // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 * unionOfTwoSOrtedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);
 *
 * @example
 * // Returns [1, 2, 3, 4, 5]
 * unionOfTwoSOrtedArray([1, 2, 3], [3, 4, 5]);
 *
 * @example
 * // Returns [1, 2, 3, 4, 5, 6]
 * unionOfTwoSOrtedArray([1, 3, 5], [2, 4, 6]);
 *
 * @example
 * // Returns [1, 2, 3] (one array empty)
 * unionOfTwoSOrtedArray([1, 2, 3], []);
 */
function unionOfTwoSOrtedArray(arr1, arr2) {
  const set = new Set(Array.from([...arr1, ...arr2]));
  return Array.from(set);
}

console.log(
  unionOfTwoSOrtedArray(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 3, 4, 4, 5, 11, 12]
  )
);
