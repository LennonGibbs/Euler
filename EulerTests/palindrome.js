function palindrome(digits) {
    let solution = 0;
    for (let i = 10**(digits-1); i < 10**(digits); i++) {
        for (let j = 10**(digits-1); j < i; j++) {
            if (isPalindrome(i * j) && i * j > solution) {
                solution = i * j
            }
        }
    }
    return solution;
}
function isPalindrome(num) {
    let word = num.toString();
    let rev = "";
    for (let i = 0; i < word.length; i++) {
        rev = rev.concat(word[word.length - i - 1]);
    }
    if (word == rev) {
        return true;
    }
    return false;
}
module.exports = palindrome;