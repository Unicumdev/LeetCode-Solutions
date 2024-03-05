
var maximumUnits = function(boxTypes, truckSize) {
boxTypes.sort((a,b)=>b[1]-a[1]); 
let count=0, numberOfBoxes=0; 
for (i=0;i<boxTypes.length;i++) {
    if (numberOfBoxes+boxTypes[i][0]>truckSize)  return  count+=(truckSize-numberOfBoxes)*boxTypes[i][1];
    numberOfBoxes+=boxTypes[i][0];
    count+=boxTypes[i][0]*boxTypes[i][1];
}
return count;
};
