const getTheTitles = function(arr) {
    let boobs = []
    for (let i = 0; i < arr.length; i ++){
        boobs.push(arr[i]["title"])
    }
    return boobs
};

// Do not edit below this line
module.exports = getTheTitles;
