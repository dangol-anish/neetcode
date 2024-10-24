/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const sNew = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    console.log(sNew)

    let left = 0;
    let right = sNew.length - 1;

    while(left < right)
    {
        if(sNew[left] !== sNew[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"
))