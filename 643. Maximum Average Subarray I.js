
var findMaxAverage = function(nums, k) {
    let avg = -Infinity, sum=rigth=left=0;
    while (rigth < nums.length){
        sum += nums[rigth];
        if((rigth - left) + 1 == k){
            avg = Math.max(avg, sum/k);
            sum -= nums[left];
            left ++;
        } 
        rigth++;      
    }
return avg;
};
