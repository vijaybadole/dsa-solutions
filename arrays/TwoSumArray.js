/**
initialise Map with with empty 
iterate through array
check the complement of target - element 
if complement exists then return current index and value from map 
else 
save the current element as key and index as value and go to the next element in the array 
repeat this process till the last element
 */

const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

/**
 *
 *   nums = [2, 7, 11, 15], target = 9     → [0, 1]
 *   nums = [3, 2, 4], target = 6          → [1, 2]
 * nums = [3, 5, 3], target = 6          → [0, 2]  // duplicate elements
 * nums = [3], target = 6                 → []       // single element
 * nums = [1, 2, 3, 4], target = 100     → []       // no solution
 * nums = [-3, 7], target = 4            → [0, 1]
 * nums = [-1, -2, -3], target = -5      → [1, 2]
 * nums = [0, 4, 0], target = 0          → [0, 2]
 * nums = [1, 2, 3, ..., 10000], target = 19999    → [9998, 9999]
 */
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 5, 3], 6)); // [0, 2]
console.log(twoSum([3], 6)); // []
console.log(twoSum([1, 2, 3, 4], 100)); // []
console.log(twoSum([-3, 7], 4)); // [0, 1]
console.log(twoSum([-1, -2, -3], -5)); // [1, 2]
console.log(twoSum([0, 4, 0], 0)); // [0, 2]

console.log(
  twoSum(
    Array.from({ length: 10000 }, (_, i) => i + 1),
    19999,
  ),
); // [9998, 9999]
