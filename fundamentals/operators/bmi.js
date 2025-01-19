const prompt = require('prompt-sync')();

const MAX_DIGITS = 2

const name = prompt('What is your name: ')
const height = parseFloat(prompt('Which is your height: ')) 
const weight = parseFloat(prompt('Which is your weight:  '))

const imb = weight / Math.pow(height, 2)

console.log(`Hi ${name}, your BMI is ~${imb.toFixed(MAX_DIGITS)}`)
