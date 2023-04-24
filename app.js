// let a = {
//     name2: "Niraj",
//     language: "JavaScript",
//     run: () => {
//         console.log("Run first")
//     }
// }

// console.log(a)

// let p = {
//     run: () => {
//         console.log("Run")
//     }
// }

// p.__proto__ = {
//     name: "Jackie"
// }

// a.__proto__ = p
// a.run();
// console.log(a.name)

class RailwayForm {
    constructor(givename, trainno) {
        console.log("constructor called " + givename + " " + trainno) //called 3 times
        this.name = givename
        this.trainno = trainno
    }
    submit() {
        console.log(`${this.name}: Your form is submitted for train number ${this.trainno}`)
    }
    cancel() {
        console.log(`${this.name}: Your form is cancelled for train number ${this.trainno}`)
    }

}
let harry = new RailwayForm("Harry", 214211);
// harry.fill("Harry", 213123);
let rohan1 = new RailwayForm("Rohan", 200420);
let rohan2 = new RailwayForm("Rohan", 200422);
// rohan1.fill("Rohan", 200420);
// rohan2.fill("Rohan", 200422);


harry.submit();
rohan1.submit()
rohan2.submit();
rohan1.cancel();