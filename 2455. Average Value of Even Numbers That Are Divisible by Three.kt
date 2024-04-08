class Solution {
    fun averageValue(nums: IntArray): Int {
    var sum: Int = 0
    var cnt: Int = 0
    for (el in nums) {
        if (el % 6 == 0) {
            sum += el
            cnt++
        }
    }
    if (cnt==0) return 0    
    return sum.div(cnt) }
}
