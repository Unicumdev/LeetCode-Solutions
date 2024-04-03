class Solution {
    function findIndices($nums, $indexDifference, $valueDifference) {
    for ($i = 0; $i < count($nums); $i++) {
        for ($j = 0; $j < count($nums); $j++) {
            if (abs($i - $j) >= $indexDifference && abs($nums[$i] - $nums[$j]) >= $valueDifference) {
                return [$i, $j];
            }
        }
    }
    return [-1, -1];
    }
}
