class Solution {
function maximumTripletValue($nums) {
if(count($nums) < 3) return 0;
$len = count($nums);
$max = 0;
for ($i=0; $i<$len-2; $i++){
    for ($j=$i+1; $j<$len-1; $j++){
        for ($k=$j+1; $k<$len; $k++){
            if (($nums[$i] - $nums[$j]) * $nums[$k] > $max) $max = ($nums[$i] - $nums[$j]) * $nums[$k];
        }
    }
} 
return ($max>=0) ? $max : 0; 
}
}
