class Solution(object):
    def singleNumber(self, nums):
        unic = nums[0]
        for i in range(1, len(nums)):
            unic ^= nums[i]
        return unic
        
