function lastVisitedIntegers(nums: number[]): number[] {
    const seen: number[] = [];
    const ans: number[] = [];
    let k = 0;
    nums.map((num) => {
        if (num !== -1) {
            seen.unshift(num);
            k = 0;
        } else {
            k++;
            ans.push(k - 1 < seen.length ? seen[k - 1] : -1);
        }
    });
return ans; 
};
