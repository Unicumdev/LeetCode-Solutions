impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
    let mut unic = nums[0];
    for i in 1..nums.len() {
        unic ^= nums[i];
    }
    unic
    }
}
