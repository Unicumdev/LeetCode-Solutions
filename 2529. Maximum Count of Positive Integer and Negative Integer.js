
var maximumCount = function(nums) {
let pos=0, neg=0;
for ( i=0;i<nums.length;i++){ if (nums[i]>0)  pos++; if (nums[i]<0) neg++; }   
return Math.max(pos,neg);
};
