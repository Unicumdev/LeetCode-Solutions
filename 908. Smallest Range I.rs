impl Solution {
    pub fn smallest_range_i(nums: Vec<i32>, k: i32) -> i32 {
    let max_num = *nums.iter().max().unwrap();
    let min_num = *nums.iter().min().unwrap();
    let diff = max_num - min_num;
    if diff <= 2 * k {0} else {diff - 2 * k}
    }
}
