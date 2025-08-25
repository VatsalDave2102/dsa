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

// console.log(maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

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

// console.log(maximumSubarraySumWithArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns return the number of contiguous subarrays in an array that have a sum equal to target k
 */
function countSubarraySumEqualsK(nums, k) {
  // initialize array length, count and prefix sum
  let n = nums.length;
  let count = 0,
    preSum = 0;

  // initialize a map
  const map = new Map();

  // set default value
  map.set(0, 1);

  // iterate through array
  for (let i = 0; i < n; i++) {
    // store prefix sum
    preSum += nums[i];

    // calculate prefix sum - target
    let remove = preSum - k;

    // update count if remove is present in map i.e. a part of array already has the target value.
    count += map.get(remove) ?? 0;

    // set prefix sum as key and update the counter of that
    map.set(preSum, (map.get(preSum) ?? 0) + 1);
  }
  return count;
}

console.log(countSubarraySumEqualsK([3, 1, 2, 4], 6));
