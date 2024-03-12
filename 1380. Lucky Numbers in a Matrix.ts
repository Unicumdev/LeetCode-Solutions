function luckyNumbers (matrix: number[][]): number[] {
let lucky:number[]=[];
for ( let arr of matrix){
    let min=Math.min(...arr);
    let count:number=0;
    for (let  i:number=0; i<matrix.length;i++){
        if ( min > matrix[i][arr.indexOf(min)]) count++;
    }
if (count==matrix.length-1) lucky.push(arr[arr.indexOf(min)]); 
}
return lucky;    
};
