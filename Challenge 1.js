const findSum = function(array) {
    let sum = 0;
    sum = array.reduce((acc, number) => acc + number);
  return sum;
};
console.log(findSum(([2, 4, 6])));
