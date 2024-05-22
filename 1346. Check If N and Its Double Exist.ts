function checkIfExist(arr: number[]): boolean {
        const n: number = arr.length;
        for (let i: number = 0; i < n; i++) {
            for (let j: number = i + 1; j < n; j++) {
                if (arr[i] * 2 === arr[j] || arr[j] * 2 === arr[i]) {return true;}
            }
        }
        return false;
};
