import promptSync from "prompt-sync";

const prompt = promptSync();

type Products = 'A'| 'B'| 'C'
type Coins = 10 | 50 | 100
type Prices = {[key in Products]: number}

const productPrices: Prices = {
    A: 270,
    B: 340,
    C: 390
};


const machine = () => {
    let sumCoins = 0
    const enterProduct = (prompt('Enter the product(A / B/ C): ')) as Products

    if (enterProduct !== 'A' && enterProduct !== 'B' && enterProduct !== 'C') {
      console.log('error')
      return
    }

    const price = productPrices[enterProduct]

    console.log(`
        Product: ${enterProduct}
        Price: ${price}: coins
        
        `)
        while(sumCoins <= price) {
        const enterCoins = parseInt(prompt('Enter the Coin (10 / 50 / 100): ')) as Coins

        if(enterCoins !== 10 && enterCoins !== 50 && enterCoins !== 100) {
          console.log('error')
          continue;
        }
        sumCoins += enterCoins;
        console.log(`Total inserted: ${sumCoins} coins`)

        if(sumCoins === price) {
          console.log('Complete amount, theres no change')
        break;
        } else if (sumCoins > price) {
          let change = sumCoins - price
          console.log(`Change: ${change}`)
          break
        }        

    }
  }
 (machine())
    