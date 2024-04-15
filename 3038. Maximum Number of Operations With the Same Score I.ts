function maxOperations(nums: number[]): number {
let score:number=nums[0]+nums[1], count:number=1;
for (let i=2;i<=nums.length-2 && nums[i]+nums[i+1]==score;i+=2)  count++; 
return count;    
};
