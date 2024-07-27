// დავალება:

// 1. Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the elements using forEach.
// let sum = 0
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// const sumnumbers = numbers.forEach(function(value){
//     sum += value
// })

// console.log(sum)


// 2. Logging Array Elements with Index: Write a function that takes an array of strings as input and logs each element along with its index using forEach.
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// const numbersIndex = numbers.forEach(function(value,index){
//     console.log(value,index)
// })

// console.log(numbersIndex)


// 3. Calculate Product of Array Elements: Write a function that takes an array of numbers as input and returns the product of all the elements using reduce.
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// const multiply = numbers.reduce(function(preValue,curValue){
//     return preValue * curValue
// },1)

// console.log(multiply)

// 4. Merge Arrays of Objects: Write a function that takes an array of arrays, each containing objects with the same structure, and merges them into a 
// single array using reduce.

// 5. Implement a manual forEach function to iterate over each element of an array and execute a provided function.

// function manualForEach(arr,func){
//     for(let i = 0; i < arr.length; i++){
//         return (arr[i],i)
//     }
// }
// let numbers = [1,2,3,4,5,6,7,8,9,10]

// manualForEach(numbers,function(value){
//     console.log(value)
// })


// 6. Implement manual reduce function to reduce an array to a single value by applying a specified function against each element and accumulating the result.
// let numbers = [1,2,3,4,5,6,7,8,9,10]

// const sumReduce = numbers.reduce(function(preValue,curValue){
//     return preValue + curValue
// },0)

// console.log(sumReduce)



// 7. Build a function that takes an array of strings, flattens it into a single string, splits it into individual words, and t
// hen counts the occurrence of each unique word using reduce, returning an object with word frequencies.

// let stringsArr = ["function in js","arrray in js","object in js","methods in js"]
// const oneString = stringsArr.reduce(function(preValue,curValue){
//     return preValue + curValue
// })
// console.log(oneString)