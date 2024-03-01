function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
let arr1:number[]=nums1.filter(e => nums2.indexOf(e) !== -1),
arr2:number[]=nums2.filter(e => nums3.indexOf(e) !== -1),
arr3:number[]=nums3.filter(e => nums1.indexOf(e) !== -1);
return [...new Set([...arr1,...arr2,...arr3])];    
};
