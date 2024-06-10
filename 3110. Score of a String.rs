impl Solution {
    pub fn score_of_string(s: String) -> i32 {
    let mut res: i32 = 0;
    for i in 0..s.len()-1 {
        res += (s.as_bytes()[i] as i32 - s.as_bytes()[i+1] as i32).abs();
    }
    res
    }
}
