class Person {
    constructor(name) {
        this._name = name
    }

    sayHello() {
        console.log("Hi " + this._name)
    }

    sayGoodBye() {
        console.log("Bye !")
    }

}

//module.exports = Person() // Can not export instance
module.exports = Person // Export class