class Vehicle {
  private isOn: boolean
    constructor(
        protected emoji: string,
        protected brand: string,
        protected model: string,
        protected fabricationYear: number
    ) {
      this.emoji = emoji
      this.brand = brand
      this.model = model
      this.fabricationYear = fabricationYear
      this.isOn = false

    }
    OnVehicle() {
      this.isOn = true
    }

    toString() {
      return `Emoji: \n${this.emoji}\nBrand: /n${this.brand}\nModel: \n${this.model}\nYear: ${this.fabricationYear}`
    }
  }

  class Car extends Vehicle {
    private isAirOn: boolean 
    constructor(
      brand: string,
      model: string,
      fabricationYear: number,
      private numOfDoors: number = 4
    ) {
      super('🚗', brand, model, fabricationYear, )
      this.isAirOn = false
    }

  }

  class Motorcycle extends Vehicle {
    constructor(
      brand: string,
      model: string,
      fabricationYear: number,
    ) {
      super('🏍️', brand, model, fabricationYear)
  }

  wheelie() {
    return '🛞'
  }
}

const car1 = new Car('Toyota', 'Tercel', 1995)
const motor1 = new Motorcycle('Honda', 'ZS', 2025 )

console.log(car1.toString())
console.log(motor1.toString())

