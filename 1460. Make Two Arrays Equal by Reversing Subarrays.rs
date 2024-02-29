impl Solution {
    pub fn can_be_equal(mut target: Vec<i32>, mut arr: Vec<i32>) -> bool {
        target.sort();
        arr.sort();
        for i in 0..arr.len() {
            if arr[i] != target[i] {
                return false;
            }
        }
        true  
        }
} ////Amazing Rust, I love it
