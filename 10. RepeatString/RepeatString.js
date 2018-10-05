function wordRepeater (str, num) {
    let repeatMe = '';

    while ( num > 0) {
        repeatMe += str;
        num--;
    }

    return repeatMe;
}

console.log(wordRepeater('codinggod', 2));
console.log(wordRepeater('google', 3));