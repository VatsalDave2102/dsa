/**
 *
 * @param {number[]} prices
 * @returns maximum profit that could be made
 */
function stockBuyAndSell(prices) {
  // initial max profit as 0, and minimum price as max integer
  let maximumProfit = 0;
  let minimumPrice = Number.MAX_SAFE_INTEGER;

  // loop through array
  for (const element of prices) {
    // set minimum price as the minimum between minimumPrice and element
    minimumPrice = Math.min(minimumPrice, element);
    // set maximum profit as maximum between current maximum profit and maximumProfit
    maximumProfit = Math.max(maximumProfit, element - minimumPrice);
  }

  return maximumProfit;
}

console.log(stockBuyAndSell([7, 1, 5, 3, 6, 4]));
