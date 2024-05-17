class Solution {
    function maxRepeating($sequence, $word) {
    $count = 0;
    while (strpos($sequence, str_repeat($word, $count + 1)) !== false) $count++;
    return $count;
    }
}
