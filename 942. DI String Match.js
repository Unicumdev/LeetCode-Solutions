
var diStringMatch = function(s) {
let cnt1 = -1, cnt2 = s.length + 1, res = [];
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
