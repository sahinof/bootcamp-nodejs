// In JavaScript, only objects and arrays are mutable. Primitive values are not.

const myArray = ["1", "2"];

copyOfMyArray = myArray; // This will point copyOfMyArray to where myArray is pointing.

console.log(copyOfMyArray);

myArray.push("3")

console.log(copyOfMyArray);

copyOfMyArray2 = [...myArray] // This copies only the values of myArray.

myArray.push("4")

console.log(copyOfMyArray2)