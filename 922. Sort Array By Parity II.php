class Solution {
    function sortArrayByParityII($nums) {
    $arr=[];
    $even = array_filter($nums, function($x) { return !($x & 1);});
    $odd = array_filter($nums, function($x) { return $x & 1;});
for ($i=0;$i<count($nums);$i++){
($i%2==0)? $arr[$i]=array_pop($even):$arr[$i]=array_pop($odd);
}   
return $arr;  
}
}
