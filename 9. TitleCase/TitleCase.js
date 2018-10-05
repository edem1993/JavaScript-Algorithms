function capitalize1stLetter (str) {
    let formattedStr = str.split(' ');
    // map makes a new array
    formattedStr = formattedStr.map( (word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        word = firstLetter.concat(word.slice(1, word.lenght));

        return word;
    });

    formattedStr = formattedStr.join(' ');

    return formattedStr;
}

console.log(capitalize1stLetter('I am a coding god'));
console.log(capitalize1stLetter('I would like to workd for Google'));