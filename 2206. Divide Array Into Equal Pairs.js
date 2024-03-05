
var divideArray = function(nums) {
let arr=[...new Set(nums)], count=0;
for (i=0;i<arr.length;i++){
    if ((nums.filter(el=>el==arr[i]).length) % 2==0) count++;
}
return  count==arr.length;
};
