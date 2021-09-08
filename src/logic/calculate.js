import operate from "./operate"

const calculate = (data, buttonName) => {
  const { total, next, operation } = data
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operators = ['+', '-', '*', '/', '%', '=']
  
  if (numbers.includes(buttonName)) {
    if (total === '0' && !total) {
      total = buttonName
    }
    if (total && !operation && !next && total !== 0) {
      total += buttonName
    }
    if (total && operation && !next) {
      next = buttonName
    }
    if (total && operation && next) {
      next += buttonName
    }
  }

  if (buttonName === '+/-') {
    if (total && !next) {
      total = operate(total, -1, '*')
    } else if (total && next) {
      next = operate(next, -1, '*')
    }
  }

  if (buttonName === '.') {
    if(!total && !next) {
      total = '0.'
    } else if (total && !next && total.indexOf('.') === -1) {
      total += '.'
    } else if (next && next.indexOf('.')) {
      next += '.'
    }
  }
  
}