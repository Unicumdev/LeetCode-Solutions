class Solution(object):
    def getMinDistance(self, nums, target, start):
        result = []
        for i in range(len(nums)):
            if nums[i] == target:
                result.append(abs(i - start))
        return min(result)
        
