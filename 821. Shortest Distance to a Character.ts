function shortestToChar(s: string, c: string): number[] {
    let prev:number = s.indexOf(c), next:number = prev;
    const ans:number[] = [];
    for (let i:number = 0; i < s.length; i ++) {
        if (s[i] == c) {
            prev = i;
            next = s.indexOf(c, prev + 1);
        }
        ans.push(Math.min(Math.abs(prev - i), Math.abs(next - i)));
    }
    return ans;   
};
