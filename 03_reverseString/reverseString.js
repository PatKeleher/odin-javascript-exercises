const reverseString = function(inputText) {

    const stringArr = inputText.split("");
    const reveresedArr = [];

    for (let i = stringArr.length - 1; i >= 0; i--) {

        reveresedArr.push(stringArr[i]);

    }

    return reveresedArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
