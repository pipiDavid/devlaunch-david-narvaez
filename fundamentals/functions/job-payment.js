const prompt = require('prompt-sync') ();

const WORK_DAY_HOURS = 8
const EXTRA_HOURS_MULTIPLIER = 1.5

function jobPayment(payPerHour, entranceHour, exitHour) {


    const workedHours = exitHour - entranceHour

    let salary = 0

    if (workedHours <= WORK_DAY_HOURS) {
        salary = payPerHour * workedHours
    } else {
        const extrasHours = workedHours - WORK_DAY_HOURS
        salary = (payPerHour * WORK_DAY_HOURS) + ((extrasHours * payPerHour) * EXTRA_HOURS_MULTIPLIER)
    }
    return salary

} 

const main = () => {

    const payPerHour = parseFloat(prompt('Enter the pay: '))
    const entranceHour = parseFloat(prompt('Entrance hour: '))
    const exitHour = parseFloat(prompt('Exit hour: '))

    const result = jobPayment(payPerHour, entranceHour, exitHour)



    console.log(`$${result}`)

}

main()