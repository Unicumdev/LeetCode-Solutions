
var countWords = function(words1, words2) {
    let map1=new Map(), map2=new Map();
    for(let i=0;i<words1.length;i++) { map1.set(words1[i],map1.get(words1[i])+1||1) }
    for(let i=0;i<words2.length;i++) { map2.set(words2[i],map2.get(words2[i])+1||1) }
    let ans=0;
    for (const key of map1){ if (key[1]===1 && map2.get(key[0])===1)  ans++; }
    return ans;
};
