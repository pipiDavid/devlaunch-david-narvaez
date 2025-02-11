type FanSize = 'Small' | 'Medium' | 'Large'
type FanColor = 'White' | 'Red' | 'Blue'
type FanSpeed = 0 | 1 | 2 | 3
class Fan {
    public speed: FanSpeed
    constructor(
        private size: FanSize,
        private type: string,
        private color: FanColor

    ) {
        this.size = size
        this.type = type
        this.color = color
        this.speed = 0 
    }

    public setSize(size: FanSize ) {
        this.size = size

    }
    public getSize() {
        return this.size
    }
    public setType(type: string ) {
        this.type = type
    }
    public getType() {
        return this.type
        
    } 
    public setColor(color: FanColor ) {
        this.color = color
    }
    public getColor() {
        return this.color
        
    } 
    public setSpeed(speed: FanSpeed ) {
          this.speed = speed
    }
    public getSpeed() {
        return this.speed
        
    }
}

const fan1 = new Fan('Large', 'Sony', 'Red', )

console.log(fan1)
fan1.setColor('White')
fan1.setSpeed(3)
fan1.setType('Lg')
fan1.setSize('Small')

console.log(fan1)
