class Solution(object):
    def findMiddleIndex(self, nums):
        sumAll = sum(nums)
        sumLeft = 0
        for i in range(len(nums)):
            if sumLeft == sumAll - sumLeft - nums[i]:
                return i
            sumLeft += nums[i]
        return -1
        
