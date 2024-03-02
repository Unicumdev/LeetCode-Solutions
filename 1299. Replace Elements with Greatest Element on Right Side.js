
var replaceElements = function(arr) {
    const res = new Array(arr.length);
    res[arr.length - 1] = -1;
    for (let i = arr.length - 1; i > 0; i --) {
    res[i - 1] = Math.max(arr[i], res[i]);
    }
    return res;
};
