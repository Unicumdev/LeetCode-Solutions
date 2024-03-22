impl Solution {
    pub fn min_start_value(nums: Vec<i32>) -> i32 {
    let mut min_sum: i32 = 0;
    let mut sum: i32 = 0;
    for num in nums {
        sum += num;
        min_sum = min_sum.min(sum);
    }
    return 1 - min_sum;
    }
}
