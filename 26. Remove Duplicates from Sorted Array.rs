impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut i: usize = nums.len() - 1;
    while i > 0 {
        if nums[i] == nums[i - 1] {
            nums.remove(i);
        }
        i -= 1;
    }
    let value:i32=  nums.len() as i32;
    return value;
    }
}
