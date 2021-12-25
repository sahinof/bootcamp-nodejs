// List methods


const car = {
    brand:'Volvo', 
    year:2021, 
    speedingTime:7.2,
    owner:(null)
}

car.color='red';
console.log(car.owner);

const listOfKeys = Object.keys(car)
const listOfValues = Object.values(car)
const listOfEntries = Object.entries(car)

console.log(listOfKeys)
console.log(listOfValues)
console.log(listOfEntries)