var minimumOperations = function(nums) {
let count = 0;
for (let i = 0; i < nums.length; i++) {
let x = Math.min(...nums.filter((n) => n !== 0));
if (x === Infinity) {
break;
}
for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
        nums[j] = nums[j] - x;
}
}
count++;
}
return count;
};
