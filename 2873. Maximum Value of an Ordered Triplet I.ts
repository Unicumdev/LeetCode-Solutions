function maximumTripletValue(nums: number[]): number {
if(nums.length < 3) return 0;
let len:number=nums.length, max:number=0;
for (let i=0;i<len-2;i++){
    for (let j=i+1;j<len-1;j++){
        for (let k=j+1;k<len;k++){
            if ((nums[i] - nums[j]) * nums[k]>max) max=(nums[i] - nums[j]) * nums[k];
        }
    }
} 
return (max>=0) ? max:0;  
};
