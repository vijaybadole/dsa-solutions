const containsDuplicate = (nums) => {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

/** *
 *   nums = [1, 2, 3, 4, 5]     → false
 *   nums = [1, 2, 3, 4, 5, 1] → true
 *  nums = [1, 1, 1, 1, 1]     → true
 * nums = [1]                 → false
 * nums = [1, 2, 3, 4, 5],  → false
 * nums = [1, 2, 3, 4, 5, 1],  → true
 * nums = [1, 1, 1, 1, 1],  → true
 * nums = [1],  → false
 * */
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 1])); // true
console.log(containsDuplicate([1, 1, 1, 1, 1])); // true
console.log(containsDuplicate([1])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 1])); // true
console.log(containsDuplicate([1, 1, 1, 1, 1])); // true
console.log(containsDuplicate([1])); // false
