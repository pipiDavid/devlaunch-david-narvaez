const superMarket = (prices: number[], n: number, basedDiscount: number = 0.2): string => {
  let subTotal = 0
  let discount = 0
  let batchCount = 0

  prices.sort().forEach(price => {
      batchCount++
      subTotal += price

      const discountTime = batchCount === n

      if(discountTime) {
          discount += subTotal * basedDiscount
          basedDiscount /= 2
          batchCount = 0
      }
  })
  const total = subTotal - discount

  return `
  Subtotal: ${subTotal}
  Discount: ${discount}
  Total: ${total}
  
  
  `
  
}

console.log(superMarket([3000, 1000, 2000,], 2))
