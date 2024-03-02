class Solution(object):
    def replaceElements(self, arr):
        res = [None] * len(arr)
        res[-1] = -1
        for i in range(len(arr) - 1, 0, -1):
            res[i - 1] = max(arr[i], res[i])
        return res
        
