function reverseString (str) {
    let reverseText = '';

    for (let i = str.length - 1; i >= 0 ; i--) {
        reverseText = reverseText + str[i]; 
    }

    return reverseText;
}


/*
function reverseString (str) {
    
    // eats more CPU, iterates through 3x
    str = str.split('').reverse().join('');
    return str;
}
*/

console.log(reverseString('codegod'));
console.log(reverseString('javascript'));