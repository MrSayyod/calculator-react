import Big from 'big.js';

// const operate = (numberOne, numberTwo, operation) => {
//   let result = 0;
//   const one = Big(numberOne);
//   const two = Big(numberTwo);
//   switch (operation) {
//     case '+':
//       result = one.plus(two);
//       break;
//     case '-':
//       result = one.minus(two);
//       break;
//     case '/':
//       if (numberTwo === 0) {
//         result = "Can't be divided zero";
//       }
//       result = one.div(two);
//       break;
//     case '*':
//       result = one.times(two);
//       break;
//     case '%':
//       result = one.mod(two);
//       break;
//     default:
//       result = Big(0);
//       break;
//   }
//   return result;
// };

const operate = (numberOne, numberTwo, operation) => {
  if (operation === null) {
    return 1;
  }
  const num1 = numberOne !== null ? Big(numberOne) : Big('0');
  const num2 = numberTwo !== null ? Big(numberTwo) : Big('0');
  let result;
  switch (operation) {
    case '+':
      result = num1.plus(num2);

      break;
    case '-':
      result = num1.minus(num2);

      break;
    case '*':
      result = num1.times(num2);

      break;
    case '/':
      result = num2 === '0' ? 'Cannot divide by zero' : num1.div(num2);

      break;
    case '%':
      if (num1 === null) {
        result = num2.div(100);
      } else {
        result = num2.div(100).times(num1);
      }

      break;
    default:
      return 'cannot solve the operation';
  }
  return result.toString();
};
export default operate;
