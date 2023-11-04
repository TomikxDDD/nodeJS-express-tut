const num1 = 5
const num2 = 8

function addNums(a, b) {
  console.log(`Result: ${a + b}`)
  return a + b
}

// When I import this module, this function is called !!!
addNums(num1, num2)