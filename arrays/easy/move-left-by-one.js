/**
 * Rotates array left by one position (moves first element to end)
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(1) - Only using constant extra space
 * Algorithm:
 * 1. Store first element temporarily
 * 2. Shift all elements one position left
 * 3. Place first element at the end
 * @param {number[]} arr - Array to rotate (modified in-place)
 * @returns {number[]} Array rotated left by one position
 */
function moveLeftByOne(arr) {
  const firstIndex = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = firstIndex;

  return arr;
}

console.log(moveLeftByOne([5, 4, 3, 2, 1]));
