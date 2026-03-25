/**
 * Problem 4 — Maximum Subarray
Given an integer array nums, find the subarray with the largest sum and return that sum.

Examples:
Input:  nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: Subarray [4, -1, 2, 1] has the largest sum = 6
Input:  nums = [1]
Output: 1
Input:  nums = [5, 4, -1, 7, 8]
Output: 23

Constraints:

Array can contain negative numbers
Subarray must be contiguous
At least one element in the array
 */

const maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

/**
 *   nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] → 6
 *   nums = [1] → 1
 *   nums = [5, 4, -1, 7, 8] → 23
 */
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
