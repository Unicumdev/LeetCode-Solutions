impl Solution {
    pub fn find_middle_index(nums: Vec<i32>) -> i32 {
    let sum_all: i32 = nums.iter().sum();
    let mut sum_left = 0;
    for (i, &num) in nums.iter().enumerate() {
        if sum_left == sum_all - sum_left - num {
            return i as i32;
        }
        sum_left += num;
    }
    -1
    }
}
