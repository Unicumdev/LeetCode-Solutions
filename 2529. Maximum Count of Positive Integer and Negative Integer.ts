function maximumCount(nums: number[]): number {
let pos:number=0, neg:number=0;
for (let  i:number=0;i<nums.length;i++){ if (nums[i]>0)  pos++; if (nums[i]<0) neg++; }   
return Math.max(pos,neg);    
};
