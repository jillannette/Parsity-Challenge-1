const numbers = ([2, 4, 6]); 

function findSum () {
  let sum = 0;
    sum = numbers.reduce((acc, number) => acc + number);
  return sum;
}
console.log(findSum([2, 4, 6]));
