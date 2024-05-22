impl Solution {
    pub fn check_if_exist(arr: Vec<i32>) -> bool {
        let n = arr.len();
        for i in (0..n) {
            for j in (i+1..n) {
                if arr[i] * 2 == arr[j] || arr[j] * 2 == arr[i] {return true;}
            }
        }
        return false; 
    }
}
