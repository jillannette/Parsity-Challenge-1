const findSum = ([2, 4, 6]); 
const initialValue = 0;

const totalSum = findSum.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(totalSum);
// 12
