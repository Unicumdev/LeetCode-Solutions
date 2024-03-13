function countWords(words1: string[], words2: string[]): number {
    let map1 =new Map<string, number>(), map2=new Map<string, number>();
    for(let i:number=0;i<words1.length;i++) { map1.set(words1[i],map1.get(words1[i])+1||1) }
    for(let i:number=0;i<words2.length;i++) { map2.set(words2[i],map2.get(words2[i])+1||1) }
    let ans:number=0;
    for (const key of map1){ if (key[1]===1 && map2.get(key[0])===1)  ans++; }
    return ans;
};   
