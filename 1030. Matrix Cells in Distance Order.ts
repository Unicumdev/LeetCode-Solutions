function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    let ans:number[][] = [];
    for (let i = 0; i<rows; i++) {
        for (let j = 0; j<cols; j++) ans.push([i, j]);
    }
    ans.sort((r, c)=>Math.abs(rCenter-r[0]) + Math.abs(cCenter-r[1]) - Math.abs(rCenter-c[0]) - Math.abs(cCenter-c[1]));
    return ans;    
};
