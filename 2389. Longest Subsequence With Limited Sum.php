class Solution {
    function answerQueries($nums, $queries) {
    sort($nums);
    $res = [];
    foreach ($queries as $query) {
        $sum = 0;
        $num = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($sum + $nums[$i] <= $query) {
                $sum += $nums[$i];
                $num++;
            } else {
                break;
            }
        }
        array_push($res, $num);
    }
    return $res;
    }
}
