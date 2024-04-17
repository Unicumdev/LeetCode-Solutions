class Solution(object):
    def maximumProduct(self, nums):
        nums.sort(reverse=True)
        return max(nums[0]*nums[1]*nums[2], nums[-1]*nums[-2]*nums[0])
        
