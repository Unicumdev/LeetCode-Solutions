class Solution {
    function smallestRangeI($nums, $k) {
         return (max($nums) - min($nums) <= 2*$k) ? 0 : max($nums) - min($nums) - 2*$k;
    }
}
