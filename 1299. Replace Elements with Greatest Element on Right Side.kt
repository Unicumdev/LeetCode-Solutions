class Solution {
    fun replaceElements(arr: IntArray): IntArray {
        val res = IntArray(arr.size)
        res[arr.size - 1] = -1
        for (i in arr.size - 1 downTo 1) {
            res[i - 1] = maxOf(arr[i], res[i])
        }
        return res 
    }
}
