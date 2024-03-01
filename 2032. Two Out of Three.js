var twoOutOfThree = function(nums1, nums2, nums3) {
let arr1=nums1.filter(e => nums2.indexOf(e) !== -1),
arr2=nums2.filter(e => nums3.indexOf(e) !== -1),
arr3=nums3.filter(e => nums1.indexOf(e) !== -1);
return [...new Set([...arr1,...arr2,...arr3])];
};
