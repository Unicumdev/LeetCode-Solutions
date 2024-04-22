class Solution {
fun findMaxAverage(nums: IntArray, k: Int): Double {
var avg = Double.NEGATIVE_INFINITY
var sum = 0
var right = 0
var left = 0
while (right < nums.size) {
    sum += nums[right]
    if ((right - left) + 1 == k) {
        avg = max(avg, sum.toDouble() / k.toDouble())
        sum -= nums[left]
        left++
    }
    right++
}
return avg
}
}
