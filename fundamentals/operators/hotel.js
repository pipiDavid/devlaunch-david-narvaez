const prompt = require('prompt-sync')();

const nightsNumber = prompt('Enter your Nigths Number: ')

const nightPrice = 100
const promoDiscount = 0.05
const subTotal = nightPrice * nightsNumber
const discount = promoDiscount * subTotal
const total = subTotal - discount

console.log(`
    
    -----------------
     HOTEL RECEIPT
    -----------------
    - Nights #: ${nightsNumber}
          Payment: 
            - Subtotal: $${subTotal}
            - Discount: $${discount}
            - Total: $${total}
    
    
    
    `)
