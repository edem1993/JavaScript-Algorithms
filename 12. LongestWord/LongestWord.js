function longestWord (str) {
    // \W -> not a digit, whitespace or underscore
    let formattedWord = str.replace( /\W\s*/g, ' ').split(' ');
    let largest = '';

    formattedWord.forEach( (element) => { 
        largest = element.length > largest.length ? element : largest;
    });

    return largest;
}

console.log(longestWord('Ready, steady, go'));
console.log(longestWord('Ready[[[, steady, go!'));
console.log(longestWord('ABCd'));