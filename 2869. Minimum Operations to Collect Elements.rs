impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
    let mut set = std::collections::HashSet::new();
    let mut step = 0;
    for i in 1..=k {
        set.insert(i);
    }
    for i in (0..nums.len()).rev() {
        if set.contains(&nums[i]) {
            set.remove(&nums[i]);
        }
        step += 1;
        if set.is_empty() {
            return step;
        }
    }
    step
    }
}
