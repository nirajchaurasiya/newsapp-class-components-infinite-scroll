/*

class RailwayForm {
    constructor(givename, trainno, address) {
        // console.log("constructor called " + givename + " " + trainno) //called 3 times
        this.name = givename
        this.trainno = trainno
        this.address = address
    }
    preview() {
        console.log(`${this.name}: Your form is for train number ${this.trainno} and your address is ${this.address}`)
    }
    submit() {
        console.log(`${this.name}: Your form is submitted for train number ${this.trainno}`)
    }
    cancel() {
        console.log(`${this.name}: Your form is cancelled for train number ${this.trainno}`)
        this.trainno = 0
    }

}

let harryForm = new RailwayForm("Harry", 1231213, "Kirtipur");
harryForm.preview();

*/


/*
// Inheritance
class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running")
    }
    shout() {
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.name} is eating banana`)
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

const m = new Monkey("Chimpu", "orange")
m.eatBanana();
m.hide();

*/

/*
class Employee {
    constructor(name) {
        console.log(`${name} constructor is here`)
        this.name = name;
    }
    login() {
        console.log(`${this.name} has logged in`)
    }
    logout() {
        console.log(`${this.name} has logged out`)
    }

    requestLeaves(leaves) {
        console.log(`${this.name} has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee {
    // there is no constructor in child class, this will create constructor automatically
    // constructor(...args) {
    //     super(...args);
    // }
    constructor(name) {
        super(name)
        console.log(`This is newly constructed Programmer class`)
    }
    requestCoffee(x) {
        console.log(`Employee has requested ${x + 1} coffee (one extra)`)
    }

    requestleaves(leaves) {
        super.requestLeaves(leaves);
        console.log(`One extra is granted`)
    }
}

let e = new Programmer("Harry")
e.login()
e.requestleaves(4)

*/


/*
// Static Methods
class Animal {
    constructor(name) {
        this._name = name
    }
    walk() {
        console.log(`Animal ${this._name} is walking`)
    }
    fly() {
        console.log(`Animal ${this._name} is flying`)
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
    get name() {
        return this._name
    }
    set name(newname) {
        this._name = newname
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        console.log(`Eating carrot`);
    }
}

let a = new Rabbit("Brouno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)
let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)

*/


class Father {
    constructor(sonsname, numberOfSon, totalNetworth, fathername) {
        this.name = sonsname
        this.numberOfSon = numberOfSon
        this.totalNetworth = totalNetworth
        this.fathername = fathername
    }
    getPropertyInEqualSon() {
        return this.totalNetworth / this.numberOfSon
    }
    getPreview() {
        console.log(`Hey! Check it carefully, Your name is ${this.name}, You are son of ${this.fathername} and your father have a total networth of ${this.totalNetworth}`)
    }
    property() {
        console.log(`Hello ${this.name}:Your father name is ${this.fathername}; You will be given Rs ${this.getPropertyInEqualSon()}`)
    }
}

class Son extends Father {
    constructor(...args) {
        super(...args)
    }
    getProperty() {
        super.property()
    }
    preview() {
        super.getPreview();
    }
}


let son1 = new Son('Ram', 4, 40, 'Mr. Ram Chandra');
let son2 = new Son('Shyam', 4, 40);

son1.getPreview();