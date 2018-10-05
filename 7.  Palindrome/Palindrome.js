function isPalindrome (str) {
    let formattedStr = str.toLowerCase().replace( /[\W_\s*]/g, '' )
    let reverseStr = formattedStr.split('').reverse().join('');

    return formattedStr == reverseStr ? true : false;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('My age is 0, 0 si ega ym.'));
console.log(isPalindrome('_codegod'));
console.log(isPalindrome('legendary'));
console.log(isPalindrome('.0_0 (: /-\ :) 0-0'));