function account(id, name, balance = 0) {
    this.id = id 
    this.name = name
    this.balance = balance

    this.deposit = (amount) => {
        this.balance += amount
    }

    this.withdraw = (amount) => {
       if (this.balance >= amount) {
        this.balance -= amount
        return amount
       }
       return null
    }

    this.transfer = (toAccount, amount) => {
        const cash = this.withdraw(amount) 

        if (cash) {
            toAccount.deposit(cash) 
            return toAccount
        }
        return null
    }

    return this
}


const acc1 = new account('208590555', 'David')
const acc2 = new account('503140785', 'Jose')
acc1.deposit(100000)
console.log(acc1)
acc1.withdraw(50000)
console.log(acc1)
acc1.transfer(acc2, 5000)
console.log(acc1)
console.log(acc2)