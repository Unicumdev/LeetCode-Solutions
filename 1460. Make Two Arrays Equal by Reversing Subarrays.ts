function canBeEqual(target: number[], arr: number[]): boolean {
target = target.sort((a, b) => a - b);
arr = arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {if(arr[i] !== target[i]) return false;}
return true;     
};
