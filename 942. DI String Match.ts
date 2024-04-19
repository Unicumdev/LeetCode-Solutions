function diStringMatch(s: string): number[] {
let cnt1:number = -1;
let cnt2:number = s.length + 1;
let  res:number[] = [];
for (let i = 0; i <= s.length; i++) {
    if (s[i] === "I") {
        cnt1++;
        res.push(cnt1);
    } else {
        cnt2--;
        res.push(cnt2);
    }
}
return res;    
};
