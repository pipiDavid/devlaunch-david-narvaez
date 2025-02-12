class Animal {
    
    constructor(
        protected name: string,
        protected specie: string,
        protected age: number

    ) {
        this.name = name
        this.specie = specie
        this.age = age

    }
    makeSound() {
        return ''
    }

    toString() {

        return `Name: ${this.name}\nSpecie: ${this.specie}\nAge: ${this.age}`

    }
}

class Lion extends Animal {
    constructor(
         name: string,
         specie: string,
         age: number 
    ) {
        super(name, specie, age)
    }
    
    makeSound(): string {
        return 'Roar....'
    }
    
    toString(): string {
        const info = `Name: ${this.name}\nSpecie: ${this.specie}\nAge: ${this.age}`

        return `🦁:\n${info}`
        
    }
}

type ElephantSize = 'Small' | 'Medium' | 'Large'
class Elephant extends Animal {
    constructor(
        name: string,
        specie: string,
        age: number,
        private size: ElephantSize
    ) {
        super(name, specie, age,)
    }

    makeSound(): string {
        return 'Prrrr'
    }
    
    toString(): string {
        const info = `Name: ${this.name}\nSpecie: ${this.specie}\nAge: ${this.age}`
        return `🐘:\n${info}\nSize: ${this.size}`

    }

}

const lion1 = new Lion('Simba', 'King', 3)
console.log(lion1.makeSound())
console.log(lion1.toString())

const elephant1 = new Elephant('Dumbo', 'Fly', 1, 'Small')
console.log(elephant1.makeSound())
console.log(elephant1.toString())