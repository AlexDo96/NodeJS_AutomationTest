class Person {
    // Setter
    set name() {
        this._name = name;
    }

    // Getter
    get name() {
        return this._name;
    }

}

let Bob = new Person();
Bob.name = "Bob";     // Setter
console.log(Bob.name); // Getter 