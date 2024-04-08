impl Solution {
    pub fn average_value(nums: Vec<i32>) -> i32 {
    let mut sum: i32 = 0;
    let mut cnt: i32 = 0;
    for el in nums {
        if el % 6 == 0 {
            sum += el;
            cnt += 1;
        }
    }
    if cnt==0 {return 0;} 
    return sum / cnt;
}}
