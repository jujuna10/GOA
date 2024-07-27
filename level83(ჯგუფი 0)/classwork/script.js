const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(function(value){
    console.log(value)
})

let num = 0

numbers.forEach(function(value){
    num += value
})

console.log(num) 