function firstDuplicate(numArray) {
    let duplicate = {};

    for (const num of numArray) {
        // if a  key exists, return it
        if (duplicate.hasOwnProperty(num)) {
            return num;
        }        
        duplicate[num] = num;
    }
    return -1;
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));
console.log(firstDuplicate([2, 2]));
console.log(firstDuplicate([2, 1, 3]));