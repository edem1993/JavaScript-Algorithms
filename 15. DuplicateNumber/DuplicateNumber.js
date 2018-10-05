function duplicateNumbers (numArr) {
    const sortedArray = numArr.sort((num1, num2) => {
        return num1 - num2;
    });

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1])
            return true;
        else 
            return false;
    }
}

console.log(duplicateNumbers([1, 2, 3, 1]));
console.log(duplicateNumbers([3, 1]));
console.log(duplicateNumbers([0, 4, 5, 0, 3, 6]));
