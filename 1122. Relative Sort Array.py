class Solution(object):
    def relativeSortArray(self, arr1, arr2):
        inside = [x for x in arr2 for y in arr1 if y == x]
        outside = [x for x in arr1 if x not in arr2]
        outside.sort()
        return inside + outside
        
