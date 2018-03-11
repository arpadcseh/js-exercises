/* 
URL: https://www.freecodecamp.org/challenges/no-repeats-please

Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

/* Function to swap values at two pointers */
function swap(str: string, i: number, j: number) {
    let temp: string;
    let charArray: string[] = str.split('');
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
}

/* Function to print permutations of string
   This function takes three parameters:
   1. String
   2. Starting index of the string
   3. Ending index of the string. */
function permute(input: string, startIndex: number, endIndex: number, acc: string[]) {
    let i, permuteResult;
    if (startIndex == endIndex) {
        return input;
    } else {
        for (i = startIndex; i <= endIndex; i++) {
            input = swap(input, startIndex, i);
            permuteResult = permute(input, startIndex + 1, endIndex, acc);
            if (typeof permuteResult === 'string') {

                acc.push(permuteResult);
            } else {
                acc.concat(permuteResult);
            }
            input = swap(input, startIndex, i); //backtrack
        }
        return acc;
    }
}

function permAlone(str: string) {
    let l = str.length;
    let permuteResult = permute(str, 0, l - 1, []);
    if (l === 1) {
        return l;
    }

    if (typeof permuteResult !== 'string') {
        return permuteResult.filter(p => !/(.)\1/.test(p)).length;
    }
    return permuteResult;
}

export default permAlone;