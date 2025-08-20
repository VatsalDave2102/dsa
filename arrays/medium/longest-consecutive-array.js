/**
 *
 * @param {number[]} nums
 * @returns the length of longest consecutive subsequence
 */
function longestConsecutiveArray(nums) {
  // if no length, return 0
  if (nums.length === 0) {
    return 0;
  }

  // initialize set and longest variable
  const set = new Set();
  let longest = 1;

  // store every element in set
  for (const element of nums) {
    set.add(element);
  }

  // loop through set
  for (const element of set) {
    // check whether set has current element - 1 present, if not then current element is the starting point of subsequence
    if (!set.has(element - 1)) {
      // initialize temporary count
      let count = 1;
      let x = element;
      // while set has x + 1 element present, increase count and x
      while (set.has(x + 1)) {
        count += 1;
        x += 1;
      }
      // assign longest
      longest = Math.max(longest, count);
    }
  }
  return longest;
}

console.log(longestConsecutiveArray([3, 8, 5, 7, 6]));
