let Person = require('./Person')

class SuperMan extends Person{
    // Must extend constructor from parent class
    constructor(name){
        super(name) // Must call super constructor
    }

    // Overwrite from the super class
    sayHello(){
        super.sayHello() // Using function from parent class
        console.log("I\'m super man !")
    }

    canFly(){
        console.log("I can fly")
    }
}

module.exports = SuperMan