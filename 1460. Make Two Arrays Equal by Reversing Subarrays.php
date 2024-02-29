class Solution {
    function canBeEqual($target, $arr) {
    sort($target);
    sort($arr);
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] !== $target[$i]) {
            return false;
        }
    }
    return true;
    }
}
