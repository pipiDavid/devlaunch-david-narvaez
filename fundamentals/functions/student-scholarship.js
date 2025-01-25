const prompt = require('prompt-sync') ();

const MIN_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 3
const MIN_GRADE = 8
const MIN_AVERAGE_GRADE = 8.5
const FAST_FORWARD_GRADE = 9

function validateScholarship(grade1, grade2, grade3, assistantGrade) {

    if (assistantGrade === MIN_ASSISTANT_GRADE) return false

    if  (grade1 < MIN_GRADE || grade1 < MIN_GRADE || grade1 < MIN_GRADE) {
        return false
    }
    
    const average = (grade1 + grade2 + grade3) / AMOUNT_OF_GRADES

    if (average < MIN_AVERAGE_GRADE) {
        return false
    }  else {
        if (average < FAST_FORWARD_GRADE && !(assistantGrade === 'A' || assistantGrade === 'B')) {
            return false
        }
    }
       return true  
}
 
function main() {

    const grade1 = parseFloat(prompt('Enter grade #1: '))
    const grade2 = parseFloat(prompt('Enter grade #2: '))
    const grade3 = parseFloat(prompt('Enter grade #3: '))

    const assistantGrade = prompt('Assistant Grade (A, B, C): ')

   const isEligible =  validateScholarship(grade1, grade2, grade3, assistantGrade)

     if (isEligible) {
        console.log('Congrats! You are eligible for the scholarship')
     } else {
        console.log('Sorry, you are not eligible for the scholarship')
     }
    
    }

main()