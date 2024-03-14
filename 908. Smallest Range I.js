
var smallestRangeI = function(nums, k) {
return (Math.max(...nums) - Math.min(...nums) <= 2*k) ?  0 : Math.max(...nums) - Math.min(...nums) - 2*k;
};
