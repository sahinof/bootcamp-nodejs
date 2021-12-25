// Classes

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce = ()=>console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
}

class Student extends Person {
    constructor(name,age,school){
        super(name,age);
        this.school = school;
    }
    introduce = ()=>console.log(`My name is ${this.name}. I'm ${this.age} years old. My school is ${this.school}.`);
}

const person1 = new Student('Ali',18,'NYU')
person1.introduce()