function findSubarrays(nums: number[]): boolean {
    for (let i = 0; i < nums.length-2; i ++) {
        for (let j = nums.length-2; j >=i+1; j --) {
            if (nums[i]+nums[i+1]==nums[j]+nums[j+1]) return true;
        }
    }
return false;  
};
