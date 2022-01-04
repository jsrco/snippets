/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = (s) => {

    if (s.length ===1) return s
    
    let longest = ""


    for (let i = 0; i < s.length-1; i++) {
        for (let j = 0; j <s.length; j++ ) {
        let subStr = s.substring(i,j)
        
            if (isPalindrome(subStr) && subStr.length > longest.length) longest = subStr
            if (subStr.length === 2 && s[0] !== s[0]) longest = s[0]
        }
    }




    return longest
};


const isPalindrome = (str) => {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}
