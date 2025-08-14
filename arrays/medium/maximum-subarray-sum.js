/**
 *
 * @param {number[]} nums
 * @returns maximum subarray total
 */
function maximumSubarraySum(nums) {
  let maximum = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const element of nums) {
    // add element to sum
    sum += element;

    // if sum is greater than maximum, change maximum
    if (maximum < sum) {
      maximum = sum;
    }

    // if sum goes down 0, we dont need that, reset it to 0
    if (sum <= 0) {
      sum = 0;
    }
  }
  return maximum;
}

console.log(maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maximumSubarraySumWithArray(nums) {
  let maximum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    // add element to sum
    sum += nums[i];

    // if sum is greater than maximum, change maximum
    if (maximum < sum) {
      maximum = sum;
      indexes.push(i);
    }

    // if sum goes down 0, we dont need that, reset it to 0
    if (sum <= 0) {
      sum = 0;
      indexes = [];
    }
  }
  return [...nums.slice(indexes[0], indexes[indexes.length - 1])];
}

console.log(maximumSubarraySumWithArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
