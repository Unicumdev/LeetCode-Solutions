var findGCD = function(nums) {
let min=Math.min(...nums), max=Math.max(...nums);
while (min) [max, min] = [min, max % min];
return max
};
