const sumAll = function(start, end) {

    if (typeof start !== "number" || typeof end !== "number") {return "ERROR";}
    
    if (start < 0 || end < 0) {return "ERROR";}

    if (Math.floor(start) !== start || Math.floor(end) !== end) {return "ERROR";}

    let sum = 0;
    let i, j;

    if (start > end) {
        i = end;
        j = start;
    } else {
        i = start;
        j = end;
    }

    for (; i <= j; i++) {

        sum = sum + i;

    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
