/**
 *
 * @param {number[]} nums
 * @returns an array of rearranged numbers
 */
function rearrangePositiveNegative(nums) {
  // get length of array
  const length = nums.length;

  //  set positive index at first index, and negative at second
  let posIndex = 0;
  let negIndex = 1;

  const answer = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    // if number is negative, add it to answer array and increase negative index by 2
    if (nums[i] < 0) {
      answer[negIndex] = nums[i];
      negIndex += 2;
      // if number is positive, add it to answer array and increase positive index by 2
    } else {
      answer[posIndex] = nums[i];
      posIndex += 2;
    }
  }

  return answer;
}

console.log(rearrangePositiveNegative([1, 2, -3, -4, 3]));
