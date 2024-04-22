class Solution {
    function findMaxAverage($nums, $k) {
    $avg = -INF;
    $sum = 0;
    $rigth = 0;
    $left = 0;
    while ($rigth < count($nums)) {
        $sum += $nums[$rigth];
        if (($rigth - $left) + 1 == $k) {
            $avg = max($avg, $sum / $k);
            $sum -= $nums[$left];
            $left++;
        }
        $rigth++;
    }
    return $avg;  
    }
}
