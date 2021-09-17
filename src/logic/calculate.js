import operate from './operate';

// const calculate = (data, buttonName) => {
//   let { total, next, operation } = data;
//   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const operators = ['+', '-', '*', '/', '%', '='];

//   if (numbers.includes(buttonName)) {
//     if (total === '0' && !total) {
//       total = buttonName;
//     }
//     if (total && !operation && !next && total !== 0) {
//       total += buttonName;
//     }
//     if (total && operation && !next) {
//       next = buttonName;
//     }
//     if (total && operation && next) {
//       next += buttonName;
//     }
//   }

//   if (buttonName === '+/-') {
//     if (total && !next) {
//       total = operate(total, -1, '*');
//     } else if (total && next) {
//       next = operate(next, -1, '*');
//     }
//   }

//   if (buttonName === '.') {
//     if (!total && !next) {
//       total = '0.';
//     } else if (total && !next && total.indexOf('.') === -1) {
//       total += '.';
//     } else if (next && next.indexOf('.')) {
//       next += '.';
//     }
//   }

//   if (buttonName === 'AC') {
//     total = 0;
//     next = '';
//     operation = '';
//   }

//   if (operators.includes(buttonName)) {
//     if (total && !next) {
//       operation = buttonName;
//     } else if (total && operation && next) {
//       total = operate(total, next, operation);
//     }
//   }

//   return total;
// };

// const calculate = (dataObj, btnName) =>{
//   let {total, next, operation} = dataObj;
//   const check =()=>{
//     if(next && operation){
//       total = operate(total, next,ope)
//     }
//   }

// }

const calculate = (dataObject, btnName) => {
  let { total, next, operation } = dataObject;
  const check = () => {
    if (next && operation) {
      total = operate(total, next, operation);
      next = null;
    }
  };
  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) {
        next *= -1;
        next = next.toString();
      } else {
        total *= -1;
        total = total.toString();
      }
      break;
    case '%':
      check();
      next = null;
      operation = '%';
      break;
    case '=':
      total = operate(total, next, operation);
      operation = null;
      next = null;
      break;
    case '+':
      check();
      next = '';
      operation = '+';
      break;
    case '-':
      check();
      next = '';
      operation = '-';
      break;
    case '*':
      check();
      next = '';
      operation = '*';
      break;
    case '÷':
      check();
      next = '';
      operation = '÷';
      break;
    case '.':
      if (total.includes('.') && next.includes('.')) {
        break;
      } else if (total.includes('.')) {
        next += '.';
      } else {
        total += '.';
      }
      break;
    default:
      if (operation === null && next === null) {
        total = total === null ? btnName : total + btnName;
      } else if (total && operation) {
        next = next === null ? btnName : next + btnName;
      }
      break;
  }
  return { total, next, operation };
};

export default calculate;
