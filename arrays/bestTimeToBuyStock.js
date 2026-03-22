// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

/**
 *   prices = [7, 1, 5, 3, 6, 4]     → 5
 *   prices = [1, 2, 3, 4, 5]     → 4
 *  prices = [7, 6, 4, 3, 1]     → 0
 * prices = [1]                 → 0
 * prices = [1, 2, 3, 4, 5],  → 4
 * prices = [5, 4, 3, 2, 1],  → 0
 * prices = [1, 2, 3, 4, 5, 6], → 5
 * prices = [6, 5, 4, 3, 2, 1], → 0
 */
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1])); // 0
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([5, 4, 3, 2, 1])); // 0
console.log(maxProfit([1, 2, 3, 4, 5, 6])); // 5
console.log(maxProfit([6, 5, 4, 3, 2, 1])); // 0
