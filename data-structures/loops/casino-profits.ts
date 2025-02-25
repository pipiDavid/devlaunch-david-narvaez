const GAME_ATTEMPTS = 50
const MIN_DIE_FACE = 1
const MAX_DIE_FACE = 6

const rollDice = (): number => {
  return Math.floor(Math.random() * MAX_DIE_FACE) + MIN_DIE_FACE
}


const casinoProfits = (): number => {

  let profit = 0

  for (let i = 0; i <= GAME_ATTEMPTS; i++) {
    const dice1 = rollDice()
    const dice2 = rollDice()
    const dice3 = rollDice()
    const sum = dice1 + dice2 + dice3

     profit += (sum >= 10) ? 10 : -15
  }
  return profit
}

  console.log(casinoProfits())

