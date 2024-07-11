export const isOperator = (value) => {
  return isNaN(value) && (value !== '.') && (value !== '=')
}

export const setId = (value) => {
  switch (value) {
    case '=':
      return 'equals'
    case 0:
      return 'zero'
    case 1:
      return 'one'
    case 2:
      return 'two'
    case 3:
      return 'three'
    case 4:
      return 'four'
    case 5:
      return 'five'
    case 6:
      return 'six'
    case 7:
      return 'seven'
    case 8:
      return 'eight'
    case 9:
      return 'nine'
    case '+':
      return 'add'
    case '-':
      return 'subtract'
    case '/':
      return 'divide'
    case '*':
      return 'multiply'
    case '.':
      return 'decimal'
    default:
      return 'delete'
  }
}
