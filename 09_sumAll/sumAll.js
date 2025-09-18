const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a<0 || b<0){
        return "ERROR"
    }
    let i = Math.min(a, b)
    let sum = 0;
    for(i; i<=Math.max(a, b); i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
