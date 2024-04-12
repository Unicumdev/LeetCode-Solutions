function maximumDifference(nums: number[]): number {
let max:number=0,len:number=nums.length;
for (let i=0;i<len-1;i++){
    for (let j=i+1;j<len;j++){
        if (max<nums[j]-nums[i]) max=nums[j]-nums[i];
    }  
} 
return ( max==0) ? -1: max; 
};
