class Solution(object):
    def twoOutOfThree(self, nums1, nums2, nums3):
        arr1 = [e for e in nums1 if e in nums2]
        arr2 = [e for e in nums2 if e in nums3]
        arr3 = [e for e in nums3 if e in nums1]
        return list(set(arr1 + arr2 + arr3))
