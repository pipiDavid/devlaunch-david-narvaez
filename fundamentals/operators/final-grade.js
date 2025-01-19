const prompt = require('prompt-sync')();

const GRADES_AMOUNT = 3
const MAX_DIGITS = 2

const grade1 = parseInt(prompt('Grade #1: '))
const grade2 = parseInt(prompt('Grade #2: '))
const grade3 = parseInt(prompt('Grade #3: '))

const average = (grade1 + grade2 + grade3) / GRADES_AMOUNT


console.log(`Final Grade: ${average.toFixed(MAX_DIGITS)}`)
