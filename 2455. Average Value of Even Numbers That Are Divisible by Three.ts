function averageValue(nums: number[]): number {
let sum:number=0;
let cnt:number=0;
for (let el of nums){ if (el%6==0) {sum+=el; cnt++} }  
return Math.floor(sum/cnt) || 0;    
};
