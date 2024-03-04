function findGCD(nums: number[]): number {
let min:number=Math.min(...nums), max:number=Math.max(...nums);
while (min) [max, min] = [min, max % min];
return max    
};
