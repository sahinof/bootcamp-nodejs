// Functions

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    }
}

const person1 = new Person('Ali',18)
person1.introduce()