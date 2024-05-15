
var majorityElement = function(nums) {
let map=new Map(), sets=new Set();
let num=Math.floor(nums.length/3);
for(let el of nums) {
    map.set(el,map.get(el)+1||1);
    if (map.get(el)>num) sets.add(el);
}
return [...sets];
};
