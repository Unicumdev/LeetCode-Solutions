impl Solution {
    pub fn di_string_match(s: String) -> Vec<i32> {
    let mut cnt1: i32 = -1;
    let mut cnt2: i32 = s.len() as i32 + 1;
    let mut res: Vec<i32> = Vec::new();
    for i in 0..=s.len() {
        if s.chars().nth(i) == Some('I') {
            cnt1 += 1;
            res.push(cnt1);
        } else {
            cnt2 -= 1;
            res.push(cnt2);
        }
    }
    res 
    }
}
