class Solution {
    fun checkIfExist(arr: IntArray): Boolean {
        val n = arr.size
        for (i in 0 until n) {
            for (j in i + 1 until n) {
                if (arr[i] * 2 == arr[j] || arr[j] * 2 == arr[i]) { return true }
            }
        }
        return false
    }
}
