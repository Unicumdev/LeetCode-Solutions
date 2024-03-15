class Solution {
    function hasTrailingZeros($nums){ return count(array_filter($nums, function($k) {return $k%2 == 0;}))>1; }
}
