/**
 * Finds the number that appears only once in an array where all other numbers appear twice.
 *
 * This function uses a Map data structure to track the frequency of each number.
 * When a number is encountered for the first time, it's added to the map. When
 * encountered again, it's removed from the map. At the end, only the number that
 * appears once remains in the map. This approach has O(n) time complexity and
 * O(n) space complexity in the worst case.
 *
 * @param {number[]} nums - Array of integers where all numbers appear twice except one
 * @returns {number} The number that appears exactly once in the array
 */
function findNumbersOnce(nums) {
  const map = new Map();

  for (const element of nums) {
    if (map.has(element)) {
      map.delete(element);
    } else {
      map.set(element, 1);
    }
  }
  const result = Array.from(map.keys());
  return result[0];
}

console.log(findNumbersOnce([1, 1, 2, 2, 3, 3, 4]));
