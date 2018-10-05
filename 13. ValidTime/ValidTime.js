function validTime(time) {
    let timeArray = time.split(':');

    if(Number(timeArray[0]) > 23) {
        return false;
    } else if (Number(timeArray[1] > 59)) {
        return false;
    } else
        return true;

}

console.log(validTime('24:00'));
console.log(validTime('23:31'));
console.log(validTime('22:00'));
console.log(validTime('22:60'));