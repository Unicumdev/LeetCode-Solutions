class Solution {
    fun minStartValue(nums: IntArray): Int {
    var m: Int = 0
    var s: Int = 0
    for (num in nums) {
        s += num
        m = Math.min(m, s)
    }
    return 1 - m
    }
}
