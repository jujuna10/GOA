// every:
// All Numbers Positive: Check if every number in an array is positive.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const isPositive = numbers.every(function(value){
//     return value > 0
// })
// console.log(isPositive)

// All Strings Non-Empty: Verify if every string in an array is non-empty.
// const numbers = ["kodjodkod","dkosojd","dosjos","dojosk"]
// const isEmpty = numbers.every(function(value){
//     return value.length > 0
// })
// console.log(isEmpty)

// All Booleans True: Confirm if every boolean in an array is true.
// const numbers = [true,true,true,true]
// const isTrue = numbers.every(function(value){
//     return value === true
// })
// console.log(isTrue)

// All Numbers Even: Check if every number in an array is even.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const isEven = numbers.every(function(value){
//     return value % 2 == 0
// })
// console.log(isEven)

// Create manual function of every
// function manualEvery(arr,func){
//     for(let i = 0; i < arr.length; i++){
//         const isTrue = func(arr[i])
//         if(isTrue === false){
//             return false
//         }
//     }
    
//     return true

// }
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const isEven = manualEvery(numbers,function(value){
//     return value % 2 == 0
// })
// console.log(isEven)




// some:
// Has Passing Grades: Check if some grades in an array are above a passing level.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const isGood = numbers.some(function(value){
//     return value > 5
// })
// console.log(isGood)


// Contains Admin Users: Verify if some user objects in an array have the role of 'admin'.
// const users = [
//     {name:"djsos",
//     status:"user"},
    
//     {name:"djiskosj",
//     status:"admin"},
    
//     {name:"disijako",
//     status:"admin"},
    
//     {name:"sjiakosji",
//     status:"user"}
// ]

// const isAdmin = users.some(function(value){
//     return value.status === "admin"
// })
// console.log(isAdmin)


// Has Overdue Items: Confirm if some objects in a list have an overdue property set to true.
// const product = [
//     {nameOfProduct:"djsos",
//     overdue:false},
    
//     {nameOfProduct:"djiskosj",
//     overdue:false},
    
//     {nameOfProduct:"disijako",
//     overdue:false},
    
//     {nameOfProduct:"sjiakosji",
//     overdue:false}
// ]

// const isOverude = product.some(function(value){
//     return value.overude === true
// })
// console.log(isOverude)

// Includes Prime Numbers: Check if some numbers in an array are prime numbers.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const isPrimeNumber = numbers.some(function(value,curValue){
//     if (value % curValue == 0)
//         return false;

//     return true;
// })
// console.log(isPrimeNumber)

// Create manual function of some
// function manualSome(arr,func){
//     for(let i = 0; i < arr.length; i++){
//         const isTrue = func(arr[i])
//         if(isTrue === true){
//             return true
//         }
//     }
    
//     return true

// }
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const isEven = manualSome(numbers,function(value){
//     return value % 2 == 0
// })
// console.log(isEven)


// find:
// Find First Negative Number: Identify the first negative number in an array.
// All Numbers Positive: Check if every number in an array is positive.
// const numbers = [1,2,3,4,-10,5,6,7,-20,8,9,10]
// const isNegative = numbers.find(function(value){
//     return value < 0
// })
// console.log(isNegative)

// Find User by ID: Return the first user object in an array with a specific ID.
// const users = [
//     {name:"djsos",
//     id:10},
    
//     {name:"djiskosj",
//     id:20},
    
//     {name:"disijako",
//     id:15},
    
//     {name:"sjiakosji",
//     id:25}
// ]

// const isId = users.find(function(value){
//     return value.id === 10
// })

// console.log(isId)

// Find First Incomplete Task: Locate the first task object in an array that has complete property set to incomplete.
// const users = [
//     {name:"djsos",
//     complate:"complate"},
    
//     {name:"djiskosj",
//     complate:"complate"},
    
//     {name:"disijako",
//     complate:"complate"},
    
//     {name:"sjiakosji",
//     complate:"complate"}
// ]

// const isComplate = users.find(function(value){
//     return value.complate === "incomplate"
// })

// console.log(isComplate)

// Find Product by Name: Search for the first product in an array with a specific name.

// const product = [
//     {nameOfProduct:"apple",
//     price:10},
    
//     {nameOfProduct:"apple",
//     price:10},
    
//     {nameOfProduct:"banana",
//     price:20},
    
//     {nameOfProduct:"banana",
//     price:20}
// ]

// const isApple = product.find(function(value){
//     return value.nameOfProduct === "apple"
// })

// console.log(isApple)


// Create manual function of find

// function manualFind(arr,func){
//     for(let i = 0; i < arr.length; i++){
//         const isTrue = func(arr[i])
//         if(isTrue === true){
//             return arr[i]
//         }
//     }
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const isSeven = manualFind(numbers,function(value){
//     return value === 7
// })

// console.log(isSeven)


// findIndex:
// Find Index of First Prime Number: Determine the index of the first prime number in an array of integers.
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const isPrime = numbers.findIndex(function(value,curValue){
//     if (value % curValue == 0)
//         return false;
//     return true
// })
// console.log(isPrime)


// Find Index of User with Admin Role: Retrieve the index of the user object in an array with the role of 'admin'.
// const users = [
//     {name:"djsos",
//     status:"user"},
    
//     {name:"djiskosj",
//     status:"admin"},
    
//     {name:"disijako",
//     status:"admin"},
    
//     {name:"sjiakosji",
//     status:"user"}
// ]

// const isAdmin = users.findIndex(function(value){
//     return value.status === "admin"
// })

// console.log(isAdmin)

// Find Index of First Overdue Item: Identify the index of the first item in a list with an overdue property set to true.
// const product = [
//     {nameOfProduct:"djsos",
//     overdue:false},
    
//     {nameOfProduct:"djiskosj",
//     overdue:false},
    
//     {nameOfProduct:"disijako",
//     overdue:false},
    
//     {nameOfProduct:"sjiakosji",
//     overdue:false}
// ]

// const productIsOverude = product.findIndex(function(value){
//     return value.overdue === true
// })

// console.log(productIsOverude)

// Find Index of Product Out of Stock: Search for the index of the first product object in an array with an inStock property set to false.
// const product = [
//     {nameOfProduct:"djsos",
//     instock:false},
    
//     {nameOfProduct:"djiskosj",
//     instock:true},
    
//     {nameOfProduct:"disijako",
//     instock:true},
    
//     {nameOfProduct:"sjiakosji",
//     instock:false}
// ]

// const isFalse = product.findIndex(function(value){
//     return value.instock === false
// })

// console.log(isFalse)

// Create manual function of findIndex


// function manualFind(arr,func){
//     for(let i = 0; i < arr.length; i++){
//         const isTrue = func(arr[i])
//         if(isTrue === true){
//             return i
//         }
//     }
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const isSeven = manualFind(numbers,function(value){
//     return value === 7
// })

// console.log(isSeven)

// indexOf:
// Index of First Occurrence of a Character: Find the index of the first occurrence of a specific character in a string.
// const string = "sjidis"
// const firstLetterIndex = string.indexOf("i")
// console.log(firstLetterIndex)

// Index of First Occurrence of a Number: Determine the index of the first occurrence of a specific number in an array.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const indexOfSeven = numbers.indexOf(7)
// console.log(indexOfSeven)


// Index of First Occurrence of a Substring: Find the index of the first occurrence of a specific substring in a string.
// პირობა ვერ გავიგე

// Index of First Occurrence of an Element in an Array of Objects: Determine the index of the first occurrence of a specific element in an array of 
//objects based on a particular property value.
// const users = [
//     {name:"djsos",
//     status:"user"},
    
//     {name:"djiskosj",
//     status:"admin"},
    
//     {name:"disijako",
//     status:"admin"},
    
//     {name:"sjiakosji",
//     status:"user"}
// ]
// const firstAdmin = users.map(user => user.status).indexOf("admin")
// console.log(firstAdmin)


// lastIndexOf:
// Last Index of a Character in a Sentence: Find the last index of a specific character in a given sentence.
// const string = "fkodkoslspo"
// const firstLetterIndex = string.lastIndexOf("s")
// console.log(firstLetterIndex)

// Last Index of a Prime Number in an Array: Determine the last index of a prime number in an array of integers.
// const numbers = [1,5,8,4,9,3,10]
// const isPrime = numbers.findLastIndex(function(value){
//     let count = 0
//     for(let i = 0; i <= value; i++){
//         if(count > 2){
//             return false
//         }

    
//         if(value % i == 0){
//             count++
//         }
//     }
//     return true
// })
// console.log(isPrime)


// Last Index of a Word in an Array of Strings: Find the last index of a specific word in an array of strings.
// const stringsAArray = ["kodokd","dokdkod","dkodk","dkodok","dkodk","dkodk"]
// const lastStringInArray = stringsAArray.findLastIndex(function(value){
//     return value
// })
// console.log(lastStringInArray)

// Last Index of an Active User in an Array of Objects: Determine the last index of an active user object in an array based on an isActive property.

// const users = [
//     {name:"djsos",
//     isActive:true},
    
//     {name:"djiskosj",
//     isActive:false},
    
//     {name:"disijako",
//     isActive:true},
    
//     {name:"sjiakosji",
//     isActive:false}
// ]

// const isActive = users.findLastIndex(function(value){
//     return value.isActive === true
// })
// console.log(isActive)




