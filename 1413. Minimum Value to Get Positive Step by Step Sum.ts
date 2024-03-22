function minStartValue(nums: number[]): number {
let m:number =0, s:number= 0;
for (let num of nums){ s += num; m = Math.min(m, s); }
return 1 - m;     
};
