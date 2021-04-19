class Person {
    //_name,_age are defined for this instance Person class
    //name,age are defined for input values
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    getName(){
        console.log(this._name);
    }

    getAge(){
        console.log(this._age);
    }
}

let Bob = new Person("Bob", 18);
Bob.getName();
Bob.getAge();

