impl Solution {
    pub fn maximum_difference(nums: Vec<i32>) -> i32 {
    let mut max: i32 = 0;
    let len: usize = nums.len();
    for i in 0..len-1 {
        for j in i+1..len {
            if max < nums[j] - nums[i] { max = nums[j] - nums[i];}
        }
    }
    return if max == 0 { -1 } else { max };
    }
}
