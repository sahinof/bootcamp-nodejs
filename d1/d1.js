//Function Hoisting

sayHi();

sayHiVar();

function sayHi() {
    console.log("Hi!");
}

var sayHiVar = function () {
    console.log("Hi! - var");
}
