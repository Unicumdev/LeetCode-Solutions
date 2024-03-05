function sortArrayByParityII(nums: number[]): number[] {
let arr:number[]=[], even:number[]=nums.filter(el=>el%2==0), odd:number[]=nums.filter(el=>el%2!==0);
for (let i:number=0;i<nums.length;i++){
(i%2==0)? arr[i]=even.pop():arr[i]=odd.pop();
}   
return arr;  
};
