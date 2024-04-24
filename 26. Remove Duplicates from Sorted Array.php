class Solution {
    function removeDuplicates(&$nums) {
    $i = count($nums) - 1;
    while ($i > 0) {
        if ($nums[$i] == $nums[$i - 1]) {
            array_splice($nums, $i, 1);
        }
        $i--;
    }
    return count($nums);
}
}
