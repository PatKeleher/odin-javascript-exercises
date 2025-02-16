const fibonacci = function(input) {
    
    let n

    if (typeof input === "string") {
        n = parseInt(input);
    } else {
        n = input;
    }
    if (n < 0) {
        return "OOPS";
    }
    if (n == 0) {
        return 0;
    }

    if (n == 1 || n == 2) {
        return 1;
    }

    let n1 = 1;
    let n2 = 1;
    let result = 0;

    for (i = 0; i < n - 2; i++) {
        result = n1 + n2;
        n2 = n1;
        n1 = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
