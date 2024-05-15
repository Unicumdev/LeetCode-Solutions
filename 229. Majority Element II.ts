function majorityElement(nums: number[]): number[] {
let obj = {}, ans = [];
for(let el of nums)  {
    obj[el] = (obj[el] || 0) + 1;
    if(obj[el] > (nums.length / 3) && !ans.includes(el)) ans.push(el);
}
return ans;
};
