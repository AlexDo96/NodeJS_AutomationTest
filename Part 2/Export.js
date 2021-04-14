//Thuoc tinh va phuong thuc
class Person {
    talk() {
        console.log("Hello there !")
    }

    speak(name) {
        console.log("Hello ", name)
    }

    //Define constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getPersonInfo() {
        console.log("My name is ", this.name)
        console.log("My age is ", this.age)
    }
}

module.exports = Person; //Way to export Object



