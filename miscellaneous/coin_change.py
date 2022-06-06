"""
  time-complexity: O(len(coins) * amount)
  space-complexity: O(amount)
"""

def coin_change(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], 1 + dp[a - c])
    if dp[amount] == amount + 1:
        return -1
    return dp[amount]

# testing
print(coin_change([1,2,3,4,5], 7))
