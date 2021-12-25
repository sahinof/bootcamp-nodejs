// Using reduce

arr = [1,2,3]

function summarize(initial, arr){
    const sum = arr.reduce((acc,item)=>{
        acc+=item
        return acc
    },initial)
    return sum
}

console.log(summarize(10,arr));