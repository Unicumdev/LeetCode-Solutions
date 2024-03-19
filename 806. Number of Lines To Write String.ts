function numberOfLines(widths: number[], s: string): number[] {
let numStr:number=0, count:number=0;
 for (let char of s){
    let elem=widths[char.charCodeAt(0) - 97];
    if (count+elem > 100) {count=0;numStr++;}
    count+=elem;
 }  
return [ numStr+1, count];
};
