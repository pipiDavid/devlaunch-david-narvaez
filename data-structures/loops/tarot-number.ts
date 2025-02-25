const MIN_TAROT_NUMBER = 0;
const MAX_TAROT_NUMBER = 9;

const BIRTH_DAY = 28;
const BIRTH_MONTH = 11;
const BIRTH_YEAR = 1989;

const tarotGame = (day: number, month: number, year: number) => {
    let sumDate = day + month + year
    let sumNumbers = 0 
    let finalSum = 0

    while (sumDate > MIN_TAROT_NUMBER) {
      sumNumbers += sumDate % 10
      sumDate = Math.floor(sumDate / 10)
    }
    while (sumNumbers > MAX_TAROT_NUMBER) {
      finalSum += sumNumbers % 10
      sumNumbers = Math.floor(sumNumbers / 10)
    }
    return `The tarot number is ${finalSum + sumNumbers}`
}

const main = (): void => {
  console.log(tarotGame(BIRTH_DAY, BIRTH_MONTH, BIRTH_YEAR))
}

main()

