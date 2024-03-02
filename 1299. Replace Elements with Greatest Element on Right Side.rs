impl Solution {
    pub fn replace_elements(arr: Vec<i32>) -> Vec<i32> {
        let mut res = vec![0; arr.len()];
        res[arr.len() - 1] = -1;
        for i in (1..arr.len()).rev() {
            res[i - 1] = arr[i].max(res[i]);
        }
        res
    }
}
