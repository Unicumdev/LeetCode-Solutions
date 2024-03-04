class Solution {
function countPairs($nums, $k) {
$count=0;
for ($i=0;$i<count($nums);$i++){
    for ($j=$i+1;$j<count($nums);$j++){
        if($nums[$i]==$nums[$j]&&($i*$j%$k==0))$count++;
    }
}
return $count; 
}
}
