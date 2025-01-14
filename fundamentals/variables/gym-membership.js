const gymName = 'Elite Fitnes Center'

const typeGym = 'boutique'

const location = 'Palo Alto, California'

const price = 150
const currency = '$'
const duration = 'mes'

const openTime = 6
const closeTime = 22 

const trainers = 10

const amenity1 = 'Sauna'
const amenity2 = 'Piscina'
const amenity3 = 'clases grupales'

 console.log(`
     Gym: ${gymName} (${typeGym})

     Location: ${location}

     Price: ${currency}${price}/${duration}

     Time: ${openTime}:00AM-${closeTime - 12}:00PM

     Team: ${trainers} certified trainers
     
     Amenities: ${amenity1}, ${amenity2}, ${amenity3}
    `)