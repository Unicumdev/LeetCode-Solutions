class Solution {
    function findSubarrays($nums) {
    for ($i = 0; $i < count($nums) - 2; $i++) {
        for ($j = count($nums) - 2; $j >= $i + 1; $j--) {
            if ($nums[$i] + $nums[$i + 1] == $nums[$j] + $nums[$j + 1]) {
                return true;
            }
        }
    }
    return false;
    }
}
