
var lastVisitedIntegers = function(nums) {
let seen = [], ans = [], k = 0;
for (let num of nums) {
    if (num > 0) { seen.unshift(num);k = 0} 
    else { if (seen.length <= k)  ans.push(-1);
        else  ans.push(seen[k]); 
    k++;
    }
}
return ans;
};
