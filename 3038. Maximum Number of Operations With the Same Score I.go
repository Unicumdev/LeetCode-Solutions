func maxOperations(nums []int) int {
    score := nums[0] + nums[1]
    count := 1
    for i := 2; i <= len(nums)-2 && nums[i]+nums[i+1] == score; i += 2 {count++}
    return count 
}
