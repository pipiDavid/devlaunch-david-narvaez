const prompt = require('prompt-sync')();

const birthdate = prompt('What your birthdate in format (YYYY/MM/DD)? ');

const today = new Date()
const birthday = new Date(birthdate)

const age = today.getFullYear() - birthday.getFullYear()

if (age >= 18) {
    console.log('Welcome to the Bar') 
} else {
    console.log("You can't enter" )
}

