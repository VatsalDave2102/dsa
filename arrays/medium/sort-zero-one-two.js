/**
 *
 * @param {number[]} nums
 * @returns sorted array
 */

function sortZeroOneTwo(nums) {
  // initialize three pointers
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    // if mid is 0, then it needs to be swapped with low, because all 0s will be from 0 to low-1
    // increment low and mid, as that index is sorted
    if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      mid++;
      low++;
    }

    // if mid is 1, it is at correct place, all 1s will be from low+1 to mid
    // increment mid and continue loop
    else if (nums[mid] === 1) {
      mid++;
    }

    // if mid is 2, it needs to swapped with high
    else {
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }
  return nums;
}

console.log(sortZeroOneTwo([2, 0, 1]));
