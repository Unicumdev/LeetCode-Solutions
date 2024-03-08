class Solution {
    public int singleNumber(int[] nums) {
        int unic = nums[0];
        for (int i = 1; i < nums.length; i++) {
            unic = unic ^ nums[i];
        }
        return unic; 
    }
}
