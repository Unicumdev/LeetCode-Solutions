function minSubsequence(nums: number[]): number[] {
    const res:number[] = [];
    nums.sort((a, b) => b - a);
    let sum:number = nums.reduce((a,b)=>a+b), cur:number = 0;
    for (let i:number = 0; i < nums.length; i++) {
        cur += nums[i];
        res.push(nums[i]);
        if (cur > sum - cur) return res;
    }
};
