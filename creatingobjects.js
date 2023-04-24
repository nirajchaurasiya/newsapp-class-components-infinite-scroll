// let person = {
//     first_name: "Niraj ",
//     last_name: "Chaurasiya",
//     getFunction: function () {
//         console.log(this.first_name + this.last_name);
//     }
// }
// person.getFunction();


// // Creating objects with function constructors

// function Student(name, address, birthYear) {
//     this.name = name;
//     this.address = address;
//     this.birthYear = birthYear;
// }

// let student1 = new Student("Niraj Chaurasiya", "Shreepur", "2004");
// console.log(student1)


/*


// JavaScript Classes

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name,
            this.maker = maker,
            this.engine = engine
    }
}

// Creating objects with constructor
let bike1 = new Vehicle("pulsar", "pulsarbike", "200cc")
console.log(bike1)

*/

/*

// Encapsulation

class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_address(addr) {
        this.addr = addr
    };

    getDetails() {
        console.log(`name is ${this.name} and id is ${this.id} and address is ${this.add_address}`)
    };
}

let person1 = new Person("Niraj", "1");
person1.add_address('Kirtipur');
console.log(person1)

*/

/*
// Inheritance
class person {
    constructor(name) {
        this.name = name;
    }
    // method to return the string

    toString() {
        return (`Name of person: ${this.name}`)
    }
}

class student extends person {
    constructor(name, id) {
        // super keyword is used to call above class constructor

        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()} and student id is ${this.id}`)
    }
}

let student1 = new student('Niraj', '1');
console.log(student1.toString())

*/