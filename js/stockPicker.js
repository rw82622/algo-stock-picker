exports.picker = function (prices) {
  let buy_index = 0;
  let gains = 0;
  let sell_index = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[buy_index]) {
      buy_index = i;
    } else if (prices[i] - prices[buy_index] > gains) {
      gains = prices[i] - prices[buy_index];
      sell_index = i;
    }
  }
  buy_index = prices.indexOf(Math.min(...prices.slice(0, sell_index)));
  return [buy_index, sell_index];
};
