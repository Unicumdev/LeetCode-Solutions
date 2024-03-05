
var sumZero = function(n) {
let arr=[];
let z=(-Math.floor(n/2))-1;
while (arr.length<n){
z++;
if (n%2==0 && z==0) continue;
arr.push(z);
}
return arr;
};
