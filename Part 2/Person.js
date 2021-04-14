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

let teo = new Person()
teo.talk()

let ti = new Person()
ti.speak("Teo")

let tun = new Person("Tun", 22)
tun.getPersonInfo()




