class Solution(object):
    def minOperations(self, nums, k):
        num_set = set()
        step = 0
        for i in range(1, k+1):
            num_set.add(i)
        for i in range(len(nums)-1, -1, -1):
            if nums[i] in num_set:
                num_set.remove(nums[i])
            step += 1
            if len(num_set) == 0:
                return step
        
