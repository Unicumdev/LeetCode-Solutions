class Solution {
function countQuadruplets($nums) {
$count = 0;
for ($a = 0; $a < count($nums) - 3; $a++) {
    for ($b = $a + 1; $b < count($nums) - 2; $b++) {
        for ($c = $b + 1; $c < count($nums) - 1; $c++) {
            for ($d = $c + 1; $d < count($nums); $d++) {
                if ($nums[$a] + $nums[$b] + $nums[$c] == $nums[$d]) {
                    $count++;
                }
            }
        }
    }
}
return $count;
}
}
