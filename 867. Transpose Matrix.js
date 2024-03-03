

var transpose = function(matrix) {
    let result = [];
    for(let i= 0; i<matrix[0].length; i++){
        let arr = []
        for(let j=0; j<matrix.length; j++){
            arr.push(matrix[j][i])
        }
        result.push(arr);
    }
    return result;
};
