function isDigit (str) {
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return digit.includes(str);
}

console.log(isDigit('1'));
console.log(isDigit('3'));
console.log(isDigit('b'));