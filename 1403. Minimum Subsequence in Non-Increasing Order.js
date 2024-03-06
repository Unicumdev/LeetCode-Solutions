
var minSubsequence = function(nums) {
    const res = [];
    nums.sort((a, b) => b - a);
    let sum = nums.reduce((a,b)=>a+b), cur = 0;
    for (let i = 0; i < nums.length; i++) {
        cur += nums[i];
        res.push(nums[i]);
        if (cur > sum - cur) return res;
    }
};
