impl Solution {
    pub fn get_min_distance(nums: Vec<i32>, target: i32, start: i32) -> i32 {
    let mut arr: Vec<i32> = Vec::new();
    for i in 0..nums.len() {
        if nums[i] == target {
            arr.push((i as i32 - start).abs());
        }
    }
    *arr.iter().min().unwrap_or(&0)
    }
}
