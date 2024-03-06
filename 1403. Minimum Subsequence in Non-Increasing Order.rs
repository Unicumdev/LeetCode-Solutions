impl Solution {
    pub fn min_subsequence(nums: Vec<i32>) -> Vec<i32> {
    let mut res: Vec<i32> = Vec::new();
    let mut nums = nums;
    nums.sort_by(|a, b| b.cmp(a));
    let sum: i32 = nums.iter().sum();
    let mut cur = 0;
    for i in 0..nums.len() {
        cur += nums[i];
        res.push(nums[i]);
        if cur > sum - cur {
            return res;
        }
    }
    res 
    }
}
