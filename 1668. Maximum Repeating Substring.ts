function maxRepeating(sequence: string, word: string): number {
let count:number = 0;
while (sequence.includes(word.repeat(count + 1))) count ++;
return count;    
};
