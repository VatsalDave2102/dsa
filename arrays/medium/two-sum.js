/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns return a tuple of two numbers whose sum is equal to the provided target, else false
 */
function twoSum(nums, target) {
  // initialze map
  const hashMap = new Map();

  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // find complement in map
    const complement = target - nums[i];
    if (hashMap.has(complement)) {
      // if present, return the tuple
      return [hashMap.get(complement), i];
    } else {
      // set the number with index
      hashMap.set(nums[i], i);
    }
  }
  return false;
}

console.log(twoSum([3, 2, 4], 6));
