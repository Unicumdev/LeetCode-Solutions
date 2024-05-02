class Solution {
    function allCellsDistOrder($rows, $cols, $rCenter, $cCenter) {
    $ans = [];
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            $ans[] = [$i, $j];
        }
    }
    usort($ans, function($r, $c) use ($rCenter, $cCenter) {
        return abs($rCenter - $r[0]) + abs($cCenter - $r[1]) - abs($rCenter - $c[0]) - abs($cCenter - $c[1]);
    });
    return $ans;
    }
}
