class Solution {
    function minStartValue($nums) {
    $m = 0;
    $s = 0;
    foreach ($nums as $num) {
        $s += $num;
        $m = min($m, $s);
    }
    return 1 - $m;
} 
}
