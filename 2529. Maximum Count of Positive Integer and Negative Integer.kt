class Solution {
    fun maximumCount(nums: IntArray): Int {
    var pos = 0
    var neg = 0
    for (num in nums) {
        if (num > 0) pos++
        if (num < 0) neg++
    }
    return maxOf(pos, neg) 
    }
}
