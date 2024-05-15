class Solution(object):
    def majorityElement(self, nums):
        num = len(nums) // 3
        counter = Counter(nums)
        return [x for x, count in counter.items() if count > num]
        
