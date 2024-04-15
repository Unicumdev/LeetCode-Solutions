impl Solution {
    pub fn max_operations(nums: Vec<i32>) -> i32 {
    let mut score: i32 = nums[0] + nums[1];
    let mut count: i32 = 1;
    for i in (2..=nums.len()-2).step_by(2) {
        if nums[i] + nums[i+1] == score {
            count += 1;
        } else {break;}
    }
    count 
    }
}
