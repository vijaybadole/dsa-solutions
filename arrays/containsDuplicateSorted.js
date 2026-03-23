const containsDuplicate = (sortedArray) => {
  for (let i = 0; i < sortedArray.length; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) return true;
  }
  return false;
};

/** *
 *   nums = [1, 2, 3, 4, 5]     → false
 *   nums = [1, 1, 2, 3, 4, 5] → true
 *  nums = [1, 1, 1, 1, 1]     → true
 * nums = [1]                 → false
 * nums = [1, 2, 3, 4, 5],  → false
 * nums = [1, 2, 3, 4, 5, 1],  → true
 * nums = [1, 1, 1, 1, 1],  → true
 * nums = [1],  → false
 * */
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
console.log(containsDuplicate([1, 1, 2, 3, 4, 5])); // true
console.log(containsDuplicate([1, 1, 1, 1, 1])); // true
console.log(containsDuplicate([1])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 1])); // true
console.log(containsDuplicate([1, 1, 1, 1, 1])); // true
console.log(containsDuplicate([1])); // false
