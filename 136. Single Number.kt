class Solution {
    fun singleNumber(nums: IntArray): Int {
        var unic = nums[0]
        for (i in 1 until nums.size) {
            unic = unic xor nums[i]
        }
        return unic
    }
}
