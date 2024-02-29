var answerQueries = function(nums, queries) {
nums.sort((a, b) => a - b);
let res = [];
for (let query of queries) {
    let sum = 0, num = 0;
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] <= query) {
                sum += nums[i]
                num++} else break
        }
        res.push(num);
    }
    return res;
};
