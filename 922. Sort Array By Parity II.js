
var sortArrayByParityII = function(nums) {
let arr=[], even=nums.filter(el=>el%2==0), odd=nums.filter(el=>el%2!==0);
for (i=0;i<nums.length;i++){
(i%2==0)? arr[i]=even.pop():arr[i]=odd.pop();
}   
return arr; 
};
