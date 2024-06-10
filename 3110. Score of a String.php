class Solution {
    function scoreOfString($s) {
    $res = 0;
    for ($i = 0; $i < strlen($s) - 1; $i++) {
        $res += abs(ord($s[$i]) - ord($s[$i + 1]));
    }
    return $res; 
    }
}
