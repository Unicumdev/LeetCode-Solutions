class Solution(object):
    def maximumCount(self, nums):
        pos = 0
        neg = 0
        for i in range(len(nums)):
            if nums[i] > 0:
                pos += 1
            if nums[i] < 0:
                neg += 1
        return max(pos, neg)
        
