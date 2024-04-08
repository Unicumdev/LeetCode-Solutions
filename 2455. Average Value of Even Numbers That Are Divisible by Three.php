class Solution {
    function averageValue($nums) {
    $sum = 0;
    $cnt = 0;
    foreach ($nums as $el) {
        if ($el % 6 == 0) {
            $sum += $el;
            $cnt++;
        }
    }
    if ($cnt==0) return 0; 
    return floor($sum / $cnt);
}}
