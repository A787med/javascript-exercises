const palindromes = function (s) {
    const ss = s.split("")
    const badChars = new Set([' ', '!', '.', ','])
    const l = s.length
    let i = 0;
    let j = l - 1;
    while(i < l/2 && j > l/2){
        while(badChars.has(ss[i])){
            i++
        }
        while(badChars.has(ss[j])){
            j--
        }
        if (ss[i].toLowerCase() != ss[j].toLowerCase()) return false;


        i++
        j--
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
