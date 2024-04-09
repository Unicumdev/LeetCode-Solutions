class Solution {
    fun minOperations(nums: List<Int>, k: Int): Int {
    val set = HashSet<Int>()
    var step = 0
    for (i in 1..k) { set.add(i)}
    for (i in nums.size - 1 downTo 0) {
        if (set.contains(nums[i])) {
            set.remove(nums[i])
        }
        step++
        if (set.isEmpty()) {return step }
    }
    return step  
    }
}
