function replaceElements(arr: number[]): number[] {
    const res:number[] = new Array(arr.length);
    res[arr.length - 1] = -1;
    for (let i:number = arr.length - 1; i > 0; i --) {
    res[i - 1] = Math.max(arr[i], res[i]);
    }
    return res;    
};
