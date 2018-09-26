function factorialize (factor) {
    if (factor == 0)
        return 1;
    //factorial = n * (n-1)
    for (let i = factor - 1; i >= 1; i--) {
        factor *= i;
    }

    return factor;
}

/*
function factorialize (factor) {
    let num = 1;

    for (let i = 1; i < factor; i++) {
        num *= i;
    }
    return num;
}
*/

console.log(factorialize(5));
console.log(factorialize(4));
console.log(factorialize(0));
console.log(factorialize(1));
console.log(factorialize(10));