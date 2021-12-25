

function calculate(operation,initial,arr){
    const result = arr.reduce((item,acc=>{
        acc = operation(acc,item);
        return acc
    },initial)
    return result
}

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

calculate(multiply,2,arr);