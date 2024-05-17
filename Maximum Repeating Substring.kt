class Solution {
    fun maxRepeating(sequence: String, word: String): Int {
    var count: Int = 0
    while (sequence.contains(word.repeat(count + 1))) count++
    return count
    }
}
