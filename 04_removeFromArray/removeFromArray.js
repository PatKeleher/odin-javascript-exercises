const removeFromArray = function(array, ...argList) {

    const filteredArray = array.filter(notEqual);

    function notEqual(value) {

        let result = true;

        for (const parameter of argList) {
            if (value === parameter) {
                result = false;
                break;
            }
        }
        return result;
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
