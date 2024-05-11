class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
    if (strs.isEmpty()) return ""
    var prefix = strs[0]
    for (word in strs) {
        while (word.indexOf(prefix) != 0) {
            prefix = prefix.slice(0 until prefix.length - 1)
            if (prefix.isEmpty()) return ""
        }
    }
    return prefix
    }
}
