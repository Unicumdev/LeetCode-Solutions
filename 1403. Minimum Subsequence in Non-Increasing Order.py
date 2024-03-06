class Solution(object):
    def minSubsequence(self, nums):
        res = []
        nums.sort(reverse=True)
        summ = sum(nums)
        cur = 0
        for i in range(len(nums)):
            cur += nums[i]
            res.append(nums[i])
            if cur > summ - cur:
                return res
        
