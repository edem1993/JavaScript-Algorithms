function digitSum(str) {
  const numbers = str.match(/\d+/g) || [];
  let sum = 0;

  numbers.forEach((num) => {
      sum += Number(num);
  });

  return sum;
}

console.log(digitSum("2 apples, 12 oranges"));
console.log(digitSum("123450"));
console.log(digitSum("Your payment method is invalid"));
