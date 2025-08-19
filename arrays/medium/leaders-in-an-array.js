/**
 *
 * @param {number[]} nums
 * @returns returns leaders from right side of the array
 */
function leadersInAnArray(nums) {
  // initialize answer array and currentMax
  const answer = [];
  let currentMax = Number.MIN_SAFE_INTEGER;

  // loop from right side of array
  for (let i = nums.length - 1; i >= 0; i--) {
    // if nums is greater than currentMax, store it in answer and change value of currentMax
    if (nums[i] > currentMax) {
      answer.unshift(nums[i]);
      currentMax = nums[i];
    }
  }

  return answer;
}

console.log(leadersInAnArray([10, 22, 12, 3, 0, 6]));
