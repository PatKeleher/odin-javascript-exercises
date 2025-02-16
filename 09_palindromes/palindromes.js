const palindromes = function (string) {
    
    const charArray = string.toLowerCase().split("")
        .filter((character) => {
            let charCode = character.charCodeAt(0);
            return (charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123);
        }).join("");

    const reversedArray = charArray.split("").reverse().join("");

    return reversedArray === charArray;
};

// Do not edit below this line
module.exports = palindromes;
