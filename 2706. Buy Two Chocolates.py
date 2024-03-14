class Solution(object):
    def buyChoco(self, prices, money):
        prices.sort()
        return money if prices[0] + prices[1] > money else money - (prices[0] + prices[1])


        
