class Solution {
    function lastVisitedIntegers($nums) {
    $seen = [];
    $ans = [];
    $k = 0;
    foreach ($nums as $num) {
        if ($num !== -1) {
            array_unshift($seen, $num);
            $k = 0;
        } else {
            $k++;
            array_push($ans, $k - 1 < count($seen) ? $seen[$k - 1] : -1);
        }
    }
    return $ans;  
    }
}
