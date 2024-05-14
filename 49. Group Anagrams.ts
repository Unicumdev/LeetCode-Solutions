function groupAnagrams(strs: string[]): string[][] {
const map=new Map();
for (let str of strs)  {
let s=str.split("").sort().join("");
map.has(s) ? map.set(s,[...map.get(s), str] ): map.set(s,[str]);
}
return [...map.values()];
};  
