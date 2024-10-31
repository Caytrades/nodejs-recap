// const greet = require('./greeting')
// greet("Cay")

// const calculate = require("./calculate");
// console.log(calculate(1, 2))

const { name, work, role } = require("./details");
const monthlyPay = require("./salary");

console.log(`Name: ${name}`)
console.log(`Place of Work: ${work}`)
console.log(`Occupation: ${role}`)
console.log(monthlyPay(1200, 200))
