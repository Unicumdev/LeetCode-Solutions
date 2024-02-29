function answerQueries(nums: number[], queries: number[]): number[] {
nums.sort((a, b) => a - b);
let res:number[] = [];
for (let query of queries) {
    let sum:number = 0, num:number = 0;
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] <= query) {
                sum += nums[i]
                num++} else break
        }
        res.push(num);
    }
    return res;   
};
