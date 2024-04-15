class Solution(object):
    def maxOperations(self, nums):
        score = nums[0] + nums[1]
        count = 1
        i = 2
        while i <= len(nums) - 2 and nums[i] + nums[i + 1] == score:
            count += 1
            i += 2
        return count
