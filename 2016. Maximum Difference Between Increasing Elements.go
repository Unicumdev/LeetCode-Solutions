func maximumDifference(nums []int) int {
    max := 0
	len := len(nums)
	for i := 0; i < len-1; i++ {
		for j := i + 1; j < len; j++ {
			if max < nums[j]-nums[i] {max = nums[j] - nums[i]}
		}
	}
	if max == 0 {return -1}
	return max
}
