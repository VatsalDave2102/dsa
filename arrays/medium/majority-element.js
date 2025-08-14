/**
 *
 * @param {number[]} nums
 * @returns returns the element that occurs more than half the length
 */
function majorityElement(nums) {
  // get the half length
  const halfLength = Math.floor(nums.length / 2);

  //   create a map to store frequencies
  const hashMap = new Map();

  //   loop through the array
  for (const element of nums) {
    // if element is already present
    if (hashMap.has(element)) {
      // get the latest frequency
      const frequency = hashMap.get(element) + 1;

      //   if frequency is greater than half the length, return element
      if (frequency > halfLength) return element;
      //   else store it in hash map with latest frequency
      else {
        hashMap.set(element, frequency);
      }
      //   else store it in hash map with first
    } else {
      hashMap.set(element, 1);
    }
  }
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
