const prompt = require('prompt-sync') ();

const MIN_YEAR = 1
const MIN_PROMO_YEAR = 3
const MIN_RECHARGE_AMOUNT = 20
const MAX_RECHARGE_AMOUNT = 80
const MEGA_PROMO_MULTIPLIER = 3
const SUPER_PROMO_MULTIPLIER = 2



function phoneRecharge(amount, subscriptionYears) {

    if (subscriptionYears < MIN_YEAR) return amount 

    let multiplier = 1

     
        if (subscriptionYears > MIN_PROMO_YEAR) {
            multiplier = MEGA_PROMO_MULTIPLIER
        } else if (
            amount >= MIN_RECHARGE_AMOUNT && 
            amount <= MAX_RECHARGE_AMOUNT
        ) {
            multiplier = SUPER_PROMO_MULTIPLIER
        }
        return amount * multiplier
    }
    


    

function main() {
    
    const name = prompt('What is your name: ')
    const subscriptionYears = parseInt(prompt('Enter your subscription years: '))
    const amount = parseInt(prompt('Enter your recharge : $'))


    const isEligible = phoneRecharge(amount, subscriptionYears)

    console.log(`
        
        THANKS ${name}
    ----------------------------
        Recharge: $${amount}
        Promo: $${isEligible}
        
        
        `)
    
    
}
main()