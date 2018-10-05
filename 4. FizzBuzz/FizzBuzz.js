function fizzBuzz(num) {
    let helper = '';

    if (num % 3 === 0)
        helper = helper.concat('fizz');
        
    if (num % 5 === 0)
        helper = helper.concat('buzz');
    
    return helper;
}


function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'fizzbuzz';
    } else if (num % 3 == 0) {
        return 'fizz';
    } else if (num % 5 == 0) {
        return 'buzz';
    } else {
        return '';
    }
}


console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(4));
console.log(fizzBuzz(15));