type TrafficLevel = 'Low' | 'middle' | 'high'

class Airport {
    private _name: string;
    private _address: string;
    private _runwayStatus: boolean;
    private _trafficLevel: TrafficLevel;

    constructor(name: string, address: string) {
        this._name = name
        this._address = address
        this._runwayStatus = true
        this._trafficLevel = 'Low'
    }

    get runwayStatus(): boolean  {
       return this._runwayStatus 
    }

    set runwayStatus(status: boolean) {
        this._runwayStatus = status
    }

    get trafficLevel(): TrafficLevel {
        return this._trafficLevel
    }

    set trafficLevel(level: TrafficLevel) {
         this._trafficLevel = level
    }

    changeTrafficLevel(level: TrafficLevel): void {
        this.trafficLevel = level
        console.log(`The traffic level has change ${level} in the airport ${this._name}`)

    }
    emergencyLanding()  {
        this.runwayStatus = false
        this._trafficLevel = 'high'
        console.log(`Emergency landing at the airport ${this._name}`)

    }

    displayInfo() {
        console.log(`Name: ${this._name}`)
        console.log(`Address: ${this._address}`)
        console.log(`Runway status: ${this.runwayStatus}`)
        console.log(`Traffic level: ${this.trafficLevel}`)
    }
}

const airport = new Airport('Juan Santamaria', 'Alajuela')

airport.displayInfo()
airport.changeTrafficLevel('middle')
airport.displayInfo()
airport.emergencyLanding()
airport.displayInfo()