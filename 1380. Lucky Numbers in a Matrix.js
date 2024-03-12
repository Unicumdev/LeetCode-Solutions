
var luckyNumbers  = function(matrix) {
let lucky=[];
for ( let arr of matrix){
    let min=Math.min(...arr);
    let count=0;
    for ( i=0; i<matrix.length;i++){
        if ( min > matrix[i][arr.indexOf(min)]) count++;
    }
if (count==matrix.length-1) lucky.push(arr[arr.indexOf(min)]); 
}
return lucky;
};
