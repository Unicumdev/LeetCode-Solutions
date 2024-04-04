
var countQuadruplets = function(nums) {
let count=0
for (a=0;a<nums.length-3;a++){
    for (b=a+1;b<nums.length-2;b++){
            for (c=b+1;c<nums.length-1;c++){
                            for (d=c+1;d<nums.length;d++){
                                if (nums[a] + nums[b] + nums[c] == nums[d]) count++;
}}}}
return count;
};
