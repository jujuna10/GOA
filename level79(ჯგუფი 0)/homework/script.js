 
//  1. Transforming Data: Given an array of objects representing people with their ages, use the map function to create a new array 
// containing only the names of these people.
// const persons = [
//     {firstname : "giorgi", age:18},
//     {firstname : "sandro", age:10},
//     {firstname : "irakli", age:20}
// ];

// const names = persons.map(function(value){
//     return value.firstname
// })

// console.log(names)

//  2. Prime or not: Given an array of numbers, use the map function to create a new array where there would be two kind of values: 
// True / False. Add True to new array, if number is prime, else add False when number is composite.

// const numbers = [10,19,20,17,18,90,100]
// const primeNumber = numbers.map(function(value){
//     for(let i = 0; i < numbers.length; i++)
//         if(value < 1){
//             return false
//         }
//         for(let i = 2; i < value; i++){
//             if(value % i == 0){
//                 return false
//             }else{
//                 return true
//             }
//         }
// })

// console.log(primeNumber)

//// 3. Filtering Data: Given an array of objects representing students with their grades, use the filter function to create a new 
// array containing only the students who passed the exam (i.e., whose grades are above a certain threshold).

// const students = [
//     {firstname : "giorgi", grade:100},
//     {firstname : "sandro", grade:70},
//     {firstname : "irakli", grade:90},
//     {firstname : "tornike", grade:70},

// ];

// const grades = students.filter(function(value){
//     if(value.grade > 70){
//         return value.firstname
//     }else{
//         return null
//     }
// })

// console.log(grades)

//  4. Finding Specific Values: Given an array of strings representing file names, use the filter function to create a new array
//  containing only the file names that have a ".jpg" extension.

// const files = ["images1.jpg","images2.pdf","images3.pdf","images4.jpg"]

// const jpgFiles = files.filter(function(value){
//     return value.endsWith(".jpg")
// })

// console.log(jpgFiles)
//  5. Create a copy function of map.

// function manualMap(funcc,arr){
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(funcc(arr[i]))
//     }

//     return newArr
// }

// function func(value){
//     return value * 2
// }

// const result = manualMap(func,[1,2,3,4,5,6,7,8,9,10])
// console.log(result)
//  6. Create a copy function of filter.

// function manualFilter(funcc,arr){
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(funcc(arr[i]) == true){
//             newArr.push(arr[i])

//         }
//     }

//     return newArr
// }

// const arr = [1,2,3,4,5,6,7,8,9,10]

// function func(value){
// }

// const result = manualFilter(function(value){
//     return value >= 4

// },arr)
// console.log(result)

