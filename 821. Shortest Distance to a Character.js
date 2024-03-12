
var shortestToChar = function(s, c) {
    let prev = s.indexOf(c), next = prev;
    const ans = [];
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == c) {
            prev = i;
            next = s.indexOf(c, prev + 1);
        }
        ans.push(Math.min(Math.abs(prev - i), Math.abs(next - i)));
    }
    return ans;
};
