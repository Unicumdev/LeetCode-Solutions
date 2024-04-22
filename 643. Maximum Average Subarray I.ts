function findMaxAverage(nums: number[], k: number): number {
    let avg:number = -Infinity;
    let sum:number=0; 
    let rigth:number =0; 
    let left:number =0;
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
