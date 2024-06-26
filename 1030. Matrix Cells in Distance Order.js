
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let ans = [];
    for (let i = 0; i<rows; i++) {
        for (let j = 0; j<cols; j++) ans.push([i, j]);
    }
    ans.sort((a, b)=>Math.abs(rCenter-a[0]) + Math.abs(cCenter-a[1]) - Math.abs(rCenter-b[0]) - Math.abs(cCenter-b[1]));
    return ans; 
};
