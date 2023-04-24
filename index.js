// Object literals
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log("Draw")
//     }
// };
// circle.draw();



// Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log("draw")
//         }
//     }
// }

// const circle = new createCircle(1)
// console.log(circle)



// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log(`Draw`)
//     }
// }

// const anotherCircle = new Circle(1)
// console.log(anotherCircle);


// let x = {};
// //  let x = new Object();

// new String(); // '',"",``
// new Boolean(); // true, false
// new Number(); //1,2,34


// let x, y, swap;
// x = { value: 10 };
// y = 20;

// x.value = 20

// let number = 10
// function increase(number) {
//     number++
// }

// increase(number)
// console.log(number)

// let obj = { value: 10 }
// function increase(obj) {
//     obj.value++
// }

// increase(obj)
// console.log(obj)


function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log(`Draw`)
    }
}

const circle = new Circle(1);
circle.location = { x: 1 }

const propertyName = 'center location'
circle[propertyName] = { x: 1 };

delete circle['location'];