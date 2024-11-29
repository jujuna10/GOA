// const os = require('os')
// const arguments = process.argv
// console.log(arguments)
// console.log(process.cwd())
// console.log(os.type())
// console.log(os.platform())
// console.log(process.memoryUsage())
// console.log(process.env.NODE_ENV)
// console.log(os.totalmem(), os.freemem())
// console.log(process.version)
// console.log(process.argv[1])
// console.log(os.uptime(), process.uptime())






const num1 = parseFloat(process.argv[2])
const operator = process.argv[3]
const num2 = parseFloat(process.argv[4])


let result = 0
switch (operator) {
  case "+":
    result = num1 + num2
    break
  case "-":
    result = num1 - num2
    break
  case "*":
    result = num1 * num2
    break
  case "/":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.")
      process.exit(1);
    }
    result = num1 / num2
    break
  case "%":
    result = num1 % num2
    break
  default:
    console.log('only +, -, *, /, %')
    process.exit(1);
}
console.log(result);











