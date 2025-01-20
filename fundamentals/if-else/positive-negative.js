const prompt = require('prompt-sync') ();

const n = parseInt(prompt('Enter n: '))

if (n > 0) {
    console.log('Positive')
} else if (n < 0) {
    console.log('Negative')
} else if (n === 0) {
    console.log('Cero')
} else {
    console.log('Please enter a valid number')
}
