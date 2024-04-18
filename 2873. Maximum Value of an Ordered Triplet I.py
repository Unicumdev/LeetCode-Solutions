class Solution(object):
    def maximumTripletValue(self, nums):
        if len(nums) < 3:
            return 0
        len_nums = len(nums)
        max_val = 0
        for i in range(len_nums - 2):
            for j in range(i + 1, len_nums - 1):
                for k in range(j + 1, len_nums):
                    if (nums[i] - nums[j]) * nums[k] > max_val:
                        max_val = (nums[i] - nums[j]) * nums[k]
        return max_val if max_val >= 0 else 0
        
