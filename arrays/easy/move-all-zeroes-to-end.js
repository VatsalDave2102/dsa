/**
 * Moves all zeros in an array to the end while maintaining the relative order of non-zero elements.
 *
 * This function uses a two-pointer approach where one pointer (j) tracks the position for
 * non-zero elements and another pointer (i) scans through the array. When a zero is found
 * at position j and a non-zero element is found at position i, they are swapped.
 * The operation is performed in-place, modifying the original array.
 *
 * @param {number[]} arr - The input array containing numbers (including zeros)
 * @returns {number[]} The modified array with all zeros moved to the end
 *
 * @example
 * // Returns [1, 2, 3, 4, 1, 0, 0, 0]
 * moveAllZeroesToEnd([1, 0, 2, 3, 0, 4, 0, 1]);
 *
 * @example
 * // Returns [1, 2, 3, 0, 0]
 * moveAllZeroesToEnd([0, 1, 0, 2, 3]);
 *
 * @example
 * // Returns [1, 2, 3, 4] (no zeros to move)
 * moveAllZeroesToEnd([1, 2, 3, 4]);
 *
 * @example
 * // Returns [0, 0, 0] (all zeros remain in place)
 * moveAllZeroesToEnd([0, 0, 0]);
 */
function moveAllZeroesToEnd(arr) {
  let j = 0;
  let i = j + 1;
  while (j < arr.length - 1 && i < arr.length) {
    if (arr[j] !== 0) {
      i++;
      j++;
    } else if (arr[j] === 0 && arr[i] === 0) {
      i++;
    } else if (arr[j] === 0 && arr[i] !== 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(moveAllZeroesToEnd([1, 0, 2, 3, 0, 4, 0, 1]));
