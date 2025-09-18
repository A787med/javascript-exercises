const fibonacci = function(inp) {
    n = Number(inp);
    if (n < 0) return "OOPS"
    if (n < 2) return n
    let miOne = 1
    let miTwo = 1
    for(let i = 1; i < n ; i++){
        const temp = miOne + miTwo
        miTwo = miOne
        miOne = temp
    }
    console.log(miTwo)
    return miTwo;
};

// Do not edit below this line
module.exports = fibonacci;
