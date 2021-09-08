import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  let result = 0
  const one = Big(numberOne)
  const two = Big(numberTwo)
  switch (operation) {
    case '+':
      result = one.plus(two)
      break;
  
    default:
      break;
  }
}