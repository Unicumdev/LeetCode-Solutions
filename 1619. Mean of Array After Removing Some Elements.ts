function trimMean(arr: number[]): number {
arr.sort((a,b)=>a-b);
let perc:number=arr.length*0.05, sum:number = 0;
   for (let i=perc; i<arr.length-perc;i++){ sum += arr[i]; }
return sum / (arr.length - (perc * 2));    
};
