class Solution(object):
    def canBeEqual(self, target, arr):
        return sorted(arr) == sorted(target)
