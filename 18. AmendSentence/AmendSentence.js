function amendSentence(str) {
    let stringArray = str.split('');

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== stringArray[i].toLowerCase()) {
            stringArray[i] = stringArray[i].toLowerCase();
            stringArray.splice(i, 0, ' ');
        }
    }
    stringArray = stringArray.join('').trim('');

    return stringArray;
}

console.log(amendSentence('CodingGodDoesWorkSon'));
console.log(amendSentence('Ain\'tNoFunIfTheHomieDon\'CodeNone'));