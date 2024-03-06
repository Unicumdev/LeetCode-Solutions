class Solution {
    fun minSubsequence(nums: IntArray): List<Int> {
    val res = mutableListOf<Int>()
    nums.sortDescending()
    var sum = nums.sum()
    var cur = 0
    for (i in nums.indices) {
        cur += nums[i]
        res.add(nums[i])
        if (cur > sum - cur) return res
    }
    return res
    }
}
