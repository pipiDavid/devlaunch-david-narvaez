const prompt = require('prompt-sync')();

const favoriteFoodMaria = prompt('Which is your favorite food Maria? ')
const favoriteFoodPepe= prompt('Which is your favorite food Pepe? ')
const favoriteFoodMalvern = prompt('Which is your favorite food Malvern? ')

const isMariaAndPepeSameFavFood = favoriteFoodMaria === favoriteFoodPepe
const isMariaAndMalvernSameFavFood = favoriteFoodMaria === favoriteFoodMalvern

const allMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const noMatch = !isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood

console.log(`Does Maria share the same favorite food as both Pepe and Malvern? : ${allMatch}`)
console.log(`Does Maria's favorite food match either Pepe's or Malvern's? : ${someMatch}`)
console.log(`Does Maria's preference differ from Pepe's and Malvern's? : ${noMatch}`)
  
