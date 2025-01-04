const repeatString = function(repeatText, repeatNum) {

    let result = "";

    if (repeatNum < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repeatNum; i++) {
        result += repeatText;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
