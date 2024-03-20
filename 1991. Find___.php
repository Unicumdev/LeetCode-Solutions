class Solution {
    function findMiddleIndex($nums) {
    $sumAll = array_reduce($nums, function($carry, $item) {
        return $carry + $item;
    });
    $sumLeft = 0;
    for ($i = 0; $i < count($nums); $i++) {
        if ($sumLeft == $sumAll - $sumLeft - $nums[$i]) {
            return $i;
        }
        $sumLeft += $nums[$i];
    }
    return -1;
    }
}
