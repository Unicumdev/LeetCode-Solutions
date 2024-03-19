
var numberOfLines = function(widths, s) {
let numStr=0, count=0;
 for (let char of s){
    let elem=widths[char.charCodeAt() - 97];
    if (count+elem > 100) {count=0;numStr++;}
    count+=elem;
 }  
return [ numStr+1, count];
};
