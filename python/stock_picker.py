def picker(prices):
    buy_index = 0
    gains = 0
    sell_index = 0
    
    for i in range(1, len(prices)):
        if prices[i] < prices[buy_index]:
            buy_index = i
        elif prices[i] - prices[buy_index] > gains:
            gains = prices[i] - prices[buy_index]
            sell_index = i
    buy_index = prices.index(min(prices[0:sell_index]))
    return [buy_index, sell_index]