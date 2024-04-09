function minOperations(nums: number[], k: number): number {
let set = new Set(), step:number=0;
for (let i = 1; i <= k; i++) { set.add(i); }
for (let i=nums.length-1;i>=0;i--){
if (set.has(nums[i])) set.delete(nums[i]);
step++;
if (set.size==0) return step;
}
};
