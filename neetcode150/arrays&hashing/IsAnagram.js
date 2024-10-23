/*
1. Create a map for each letters of a string with their frequency
2. Reduce the frequency while comparing the letters with another string
*/

function isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let sLetters = {};

        for (let char of s) {
            sLetters[char] = (sLetters[char] || 0) + 1;
        }

        for (let char of t) {
            if (!sLetters[char]) {
                return false;
            }
            sLetters[char]--;
            if (sLetters[char] === 0) {
                delete sLetters[char];
            }
        }
        return Object.keys(sLetters).length === 0;
}

const result = isAnagram("bbcc", "ccbc");
console.log(result);
