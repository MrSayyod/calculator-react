import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const one = Big(numberOne);
  const two = Big(numberTwo);
  switch (operation) {
    case '+':
      result = one.plus(two);
      break;
    case '-':
      result = one.minus(two);
      break;
    case '/':
      if (numberTwo === 0) {
        result = "Can't be divided zero";
      }
      result = one.div(two);
      break;
    case '*':
      result = one.times(two);
      break;
    case '%':
      result = one.mod(two);
      break;
    default:
      result = Big(0);
      break;
  }
  return result;
};

export default operate;
