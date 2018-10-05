function longestWord (str) {
    let longestStr = 0;
    let strArray = str.split(' ');

    strArray.forEach((word) => {
        longestStr = longestStr < word.length ? word.length : longestStr;
    });
    return longestStr;
}

console.log(longestWord('I am a coding god'));
console.log(longestWord('I would like to workd for Google'));
console.log(longestWord('Ain\'t no fun if the homie don\'t code none'));


/* function longestWord (str) {
    let longestStr = 0;
    let strArray = str.split(' ');

    for (let i = 0; i < strArray.length; i++) {
        if (longestStr < strArray[i].length) {
            longestStr = strArray[i].length;
        }
    }
    return longestStr;
} */

/* function longestWord (str) {
    let longestStr = 0;
    let strArray = str.split(' ');

    for (let i = 0; i < strArray.length; i++) {
        longestStr = longestStr < strArray[i].length ? strArray[i].length : longestStr;
    }
    return longestStr;
} */