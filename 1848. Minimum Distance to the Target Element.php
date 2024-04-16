class Solution {
    function getMinDistance($nums, $target, $start) {
    $arr = [];
    for ($i = 0; $i < count($nums); $i++) { if ($nums[$i] == $target) {array_push($arr, abs($i - $start)); }}
    return min($arr);
    }
}
