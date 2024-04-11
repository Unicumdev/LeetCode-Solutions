class Solution {
    fun longestMonotonicSubarray(nums: IntArray): Int {
           var ans: Int = 1
    var inc: Int = 1
    var dec: Int = 1
    
    for (i in 1 until nums.size) {
        if (nums[i - 1] > nums[i]) {
            dec++
            inc = 1
        } else if (nums[i - 1] < nums[i]) {
            dec = 1
            inc++
        } else {
            inc = 1
            dec = 1
        }
        
        ans = maxOf(ans, inc, dec)
    }
    
    return ans 
    }
}
