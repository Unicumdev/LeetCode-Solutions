class Solution(object):
    def findGCD(self, nums):
        minim=min(nums)
        maxim=max(nums)
        while minim: [maxim, minim] = [minim, maxim % minim]
        return maxim
        
