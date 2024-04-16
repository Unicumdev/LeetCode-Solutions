class Solution {
    fun getMinDistance(nums: IntArray, target: Int, start: Int): Int {
    val arr = mutableListOf<Int>()
    for (i in nums.indices) {if (nums[i] == target) arr.add(Math.abs(i - start))}
    return arr.minOrNull() ?: 0
    }
}
