
var singleNumber = function(nums) {
let unic = nums[0]
    for(let i=1; i<nums.length; i++) unic = unic ^ nums[i];
return unic   
};
