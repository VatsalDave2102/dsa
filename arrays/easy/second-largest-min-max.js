/**
 * Finds second largest and second smallest elements in array
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(1) - Only using constant extra space
 * Algorithm:
 * 1. Initialize variables for smallest, second smallest, largest, second largest
 * 2. Traverse array once, updating values as needed
 * 3. Return second smallest and second largest
 * @param {number[]} arr - Input array
 * @returns {number[]} Array containing [second smallest, second largest]
 */
function secondLargestMixMaxInArray(arr) {
  let small = Number.MAX_SAFE_INTEGER;
  let secondSmall = Number.MAX_SAFE_INTEGER;
  let large = Number.MIN_SAFE_INTEGER;
  let secondLarge = Number.MIN_SAFE_INTEGER;

  for (const element of arr) {
    if (element < small) {
      secondSmall = small;
      small = element;
    }
    if (element < secondSmall && element > small) secondSmall = element;
    if (element > large) {
      secondLarge = large;
      large = element;
    }
    if (element > secondLarge && element < large) secondLarge = element;
  }
  return [secondSmall, secondLarge];
}

console.log(secondLargestMixMaxInArray([6, 4, 3, 1, 2, 7, 5]));
