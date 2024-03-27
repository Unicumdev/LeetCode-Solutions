impl Solution {
    pub fn last_visited_integers(nums: Vec<i32>) -> Vec<i32> {
    let mut seen: Vec<i32> = vec![];
    let mut ans: Vec<i32> = vec![];
    let mut k = 0;
    for num in nums {
        if num != -1 {
            seen.insert(0, num);
            k = 0;
        } else {
            k += 1;
            ans.push(if k - 1 < seen.len() { seen[k - 1] } else { -1 });
        }
    }
    ans 
    }
}
