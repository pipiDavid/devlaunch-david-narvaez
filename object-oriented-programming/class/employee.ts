class Employee {
    constructor(
        public _firstName: string,
        public _lastName: string, 
        private _salary: number
    ) {
        this._firstName = _firstName
        this._lastName = _lastName
        this._salary = _salary
    }

    set salary(salary: number) {
        if(salary > 0) {
            this._salary = salary
        }
         
    }

    get salary() {
       return this._salary
    }

    giveRaise(extra: number) {
        const newSalary = this._salary + extra
        this._salary = newSalary
        return this._salary
    }
}

const e1 = new Employee('Pipi', 'Narvaez', 100000)
console.log(e1.giveRaise(200000))
