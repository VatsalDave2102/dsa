/**
 *
 * @param {number[]} nums
 * @returns the next permutation
 */
function nextPermutation(nums) {
  // initialize breakpoint, i.e. the first number in descending order from right side
  let breakPoint = -1;

  // find the breakpoint by looping through nums and break immediately
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      breakPoint = i;
      break;
    }
  }

  // if no breakpoint found, that means it is the last permutation, so reverse it and return
  if (breakPoint === -1) {
    return nums.reverse();
  }

  // find first greater number than breakpoint, and swap them and break
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[breakPoint]) {
      let temp = nums[i];
      nums[i] = nums[breakPoint];
      nums[breakPoint] = temp;
      break;
    }
  }

  // reverse the right half from breakpoint's index and return it
  nums.splice(
    breakPoint + 1,
    nums.length - breakPoint - 1,
    ...nums.slice(breakPoint + 1).reverse()
  );
  return nums;
}

console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));
