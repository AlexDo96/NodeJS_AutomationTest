class Person {
    getName() {
        console.log("My name is: Teo");
    }

    getAge() {
        console.log("My age is: 20");
    }

    getInputName(name){
        console.log("My name is: ", name);
    }
}

let Teo = new Person();
Teo.getName();
Teo.getAge();

let Ti = new Person();
Ti.getInputName("Ti");


