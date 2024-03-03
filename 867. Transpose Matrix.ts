function transpose(matrix: number[][]): number[][] {
    let result:number[][] = [];
    for(let i:number= 0; i<matrix[0].length; i++){
        let arr:number[] = []
        for(let j:number=0; j<matrix.length; j++){
            arr.push(matrix[j][i])
        }
        result.push(arr);
    }
    return result;
};
