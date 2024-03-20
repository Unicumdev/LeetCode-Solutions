class Solution {
    fun findMiddleIndex(nums: IntArray): Int {
    val sumAll = nums.sum()
    var sumLeft = 0
    for (i in nums.indices) {
        if (sumLeft == sumAll - sumLeft - nums[i]) {
            return i
        }
        sumLeft += nums[i]
    }
    return -1
    }
}
