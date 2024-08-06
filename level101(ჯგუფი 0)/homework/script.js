// Function declarations and Arrow Functions:

// 1. Write a function that takes two numbers and returns their sum.
// function sum(a,b){
//     console.log(a + b)
// }
// sum(10,10)
// 2. Create a function that accepts a string and returns the string reversed.
// function reverse(string){
//     let spliting = string.split("")
//     let reverseString = spliting.reverse()
//     console.log(reverseString.join(""))
// }
// reverse("hello")
// 3. Implement a function that checks if a given number is even.
// function isEven(num){
//     console.log(num % 2 === 0 ? "even" : "odd")
// }
// isEven(10)
// 4. Write an arrow function that takes an array and returns its length.
// const arrLength = arr => {
//     console.log(arr.length)
// }
// arrLength([1,2,3,4,5,6,7,8,9,10])
// 5. Create an arrow function that calculates the area of a rectangle given its width and height.
// const recta = (width,height) => {
//     console.log((width + height) * 2)
// }
// recta(10,20)
// 6. Write a function that takes an array of numbers and returns a new array with each number doubled.
// function double(arr){
//     const doubled = arr.map((num) => {
//         return num * 2
//     })
//     console.log(doubled)
// }
// double([1,2,3,4,5,6,7,8,9,10])
// 7. Implement a function that takes a string and returns it in uppercase.
// function upper(string){
//     console.log(string.toUpperCase())
// }
// upper("hello")
// 8. Create an arrow function that filters out all odd numbers from an array.
// function filterOdd(arr){
//     const filteredOdd = arr.filter((num) => {
//         return num % 2 === 0
//     })
//     console.log(filteredOdd)
// }
// filterOdd([1,2,3,4,5,6,7,8,9,10])
// 9. Write a function that accepts a number and returns its factorial.
// function fact(num){
//     if(num === 0 || num === 1){
//         return 1
//     }
//     else{
//         return num * fact(num - 1)
//     }
// }
// console.log(fact(5))
// 10. Create an arrow function that takes a string and returns the number of vowels in the string.
// function countVowels(string){
//     let count = 0
//     let vowels = ["a","e","i","o","u"]
//     for(let i of string.toLowerCase()){
//         if(vowels.includes(i)){
//             count += 1
//         }
//     }
    
//     console.log(count)

// }
// countVowels("kokoesjieooqka")

// Template Literals:

// 1. Create a template literal that includes a variable in a sentence.
// let num = 10
// console.log(`age is ${num}`)
// 2. Use a template literal to create a multiline string.
// let num = 10
// let num2 = 20
// let string = `
// rokrokro ${num}
// rkorokr
// rkorokr ${num2}
// rokrkor
// rokrok
// `
// console.log(string)
// 3. Write a template literal that embeds an expression to calculate the sum of two numbers.
// let num = 100
// let num2 = 20
// console.log(`sum is ${num + num2}`)
// 4. Create a template literal to format a date using variables for day, month, and year.
// let day = 10
// let month = 6
// let year = 2000
// console.log(`day ${day} month ${month} year ${year}`)
// 5. Use a template literal to construct a URL from variables for the protocol, domain, and path.
// let protocol = 'https';
// let domain = 'homework.com';
// let path = '/path/to/resource';
// console.log(`${protocol}://${domain + path}}`)

// 6. Create a template literal that includes a conditional expression.
// let num = 10
// console.log(`${num === 10 ? true : false}`)
// 7. Write a template literal that formats an address using variables for street, city, and zip code.
// let street = "kdookdkodokd"
// let city = "dkdokdkodko"
// let code = 2091929
// console.log(`${street + " " + city + " " + code}`)
// 8. Use a template literal to create a simple HTML structure with a variable for the content.
// let string = "dkodkdkodko"
// let html = `
//     ${string}
// `
// document.getElementById("div").textContent = html

// 9. Create a template literal that includes a loop to generate a list of items from an array.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i of arr){
//     console.log(`number ${i}`)
// }
// 10. Write a template literal that interpolates a function call and includes its result in a sentence.
// function greet(name){
//     console.log(`hello ${name}`)
// }
// let func = `this is greet message for ${greet}`
// console.log(func)




// 1. Use the `&&` operator to conditionally log a message if a variable is true.
// let num = 10
// console.log(console.log(Boolean(num)) && console.log(num.length))
// 2. Use the `||` operator to set a default value for a variable if it is falsy.
// let value = "false"
// let string = ""
// console.log(string || value)
// 3. Use the ternary operator to assign a value based on a condition.
// let num = 10
// console.log(num > 0 ? true : false)
// 4. Write a short conditional using the `&&` operator to call a function only if a variable is not null.
// let num = 10
// function greet(name){
//     console.log(`hello ${name}`)
// }
// num != null && greet("soskos")
// 5. Use the `||` operator to return the first truthy value from a list of variables.
// let a = null
// let b = 0
// let c = "Hello"
// let d = false
// console.log(a || b || c || d)
// 6. Use the ternary operator to log different messages based on whether a number is positive or negative.
// let num = 100
// console.log(num > 0 ? true : false)



// 1. Use the `map` function to create a new array with each element doubled.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const doubled = arr.map((number) => {
//     return number * 2
// })
// console.log(doubled)

// 2. Apply the `map` function to convert an array of strings to uppercase.
// let arr = ["soksoks","okdkod","dokkod","kdookd"]
// const upperCase = arr.map((string) => {
//     return string.toUpperCase()
// })
// console.log(upperCase)

// 3. Use the `map` function to extract a specific property from an array of objects.
// const users = [
//     { name: "dkodok", age: 10 },
//     { name: "dkoodk", age: 12 },
//     { name: "dkodok", age: 8 }
// ]
// const names = users.map((nameeeee) => {
//     return nameeeee.name
// })
// console.log(names)
// 4. Implement the `map` function to add 5 to each element in an array of numbers.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const addFive = arr.map((number) => {
//     return number + 5
// })
// console.log(addFive)

// 5. Use the `map` function to convert an array of numbers to their square roots.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const roots = arr.map((number) => {
//     return Math.sqrt(number)
// })
// console.log(roots)
// 6. Apply the `map` function to format an array of dates into a readable string format.
// const dates = [
//     new Date("2024-06-01"),
//     new Date("2024-08-09"),
//     new Date("2000-08-03")
// ]
// const formatDate = dates.map((date) => {
//     return date.toLocaleDateString("ka-GE",{
//         year: "numeric",
//         month: "short",
//         day: "numeric"
//     })
// })
// console.log(formatDate)
// 7. Use the `map` function to create a new array with the lengths of each string in an array of strings.
// let arr = ["soksoks","okdkod","dokkod","kdookd"]
// const stringLength = arr.map((string) => {
//     return string.length
// })
// console.log(stringLength)
// 8. Implement the `map` function to prepend a string to each element in an array of strings.
// let arr = ["soksoks","okdkod","dokkod","kdookd"]
// const prepend = arr.map((string) => {
//     return string + "-"
// })
// console.log(prepend)
// 9. Use the `map` function to create an array of boolean values indicating whether each number in an array is even.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const isEven = arr.map((number) => {
//     return number % 2 == 0
// })
// console.log(isEven)
// 10. Apply the `map` function to replace specific characters in each string of an array. 
// let arr = ["soksoks","okdkod","dokkod","kdookd"]
// const replaceLetter = arr.map((string) => {
//     return string.replace(/k/g,"q")
// })
// console.log(replaceLetter)







// 1. Use the `filter` function to create a new array with only even numbers.
// 9. Use the `map` function to create an array of boolean values indicating whether each number in an array is even.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const isEven = arr.filter((number) => {
//     return number % 2 == 0
// })
// console.log(isEven)
// 2. Apply the `filter` function to extract all strings longer than 5 characters from an array.
// let arr = ["dokd","dokdokd","dkodko","dkod","dkodok"]
// const longString = arr.filter((string) => {
//     return string.length <= 5
// })
// console.log(longString)
// 3. Use the `filter` function to create a new array with objects that have a specific property value.
// const users = [
//     { name: "dkodok", age: 10 },
//     { name: "dkoodk", age: 12 },
//     { name: "dkodok", age: 8 }
// ]
// const names = users.filter((nameeeee) => {
//     return nameeeee.age >= 10
// })
// console.log(names)
// 4. Implement the `filter` function to remove all null or undefined values from an array.
// let arr = [null,"dokdokd","dkodko",undefined,"dkodok"]
// const onlyString = arr.filter((string) => {
//     return string != null || undefined
// })
// console.log(onlyString)

// 5. Use the `filter` function to select all numbers greater than 10 from an array of numbers.
// let arr = [282,92,382,93,28,3,18,4,29,1,9,8,2,9,2,91,92]
// const isMoreThenTen = arr.filter((number) => {
//     return number > 10
// })
// console.log(isMoreThenTen)
// 6. Apply the `filter` function to create an array of words that start with a specific letter.
// let arr = ["hidsjs","dokdokd","dkodko","hisihs","dkodok","hsisis","hishis"]
// const startWithH = arr.filter((string) => {
//     return string[0] == "h"
// })
// console.log(startWithH)
// 7. Use the `filter` function to extract all prime numbers from an array of numbers.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function isPrime(number){
//     if (number <= 1) return false
//     if (number === 2) return true

//     if (number % 2 === 0) return false; 

//     for (let i = 3; i <= Math.sqrt(number); i += 2) {
//         if (number % i === 0) return false
//     }

//     return true
// }
// const primeNumber = arr.filter(isPrime)
// console.log(primeNumber)

// 8. Implement the `filter` function to create an array of users who are over a certain age from an array of user objects.
// const users = [
//     { name: "ddokdo", age: 15 },
//     { name: "djdok", age: 12 },
//     { name: "dodkd", age: 10 },
//     { name: "dokdok", age: 8 }

// ]
// const names = users.filter((nameeeee) => {
//     return nameeeee.age > 10
// })
// console.log(names)
// 9. Use the `filter` function to remove duplicate values from an array.
// let arr = [282,92,382,93,28,3,18,4,29,1,9,8,2,9,2,91,92]
// const seen = new Set()
// const noDuplicate = arr.filter((number) => {
//     if(seen.has(number)){
//         return false
//     }
//     else{
//         seen.add(number)
//         return true
//     }
// })
// console.log(noDuplicate)

// 10. Apply the `filter` function to create a new array with only truthy values.
// let arr = [true,true,true,true,false,false,true,false,true]

// const onlyTrue = arr.filter((bool) => {
//     return bool == true
// })
// console.log(onlyTrue)



// 1. Use the `reduce` function to calculate the sum of an array of numbers.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const sum = arr.reduce((preValue,curValue) => {
//     return preValue + curValue
// },0)
// console.log(sum)

// 2. Apply the `reduce` function to concatenate an array of strings into a single string.
// let arr = ["hidsjs","dokdokd","dkodko","hisihs","dkodok","hsisis","hishis"]
// const oneString = arr.reduce((preValue,curValue) => {
//     return preValue + curValue
// },"")
// console.log(oneString)
// 3. Use the `reduce` function to find the maximum value in an array of numbers.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const maxNumber = arr.reduce((accumulator,curValue) => {
//     return Math.max(accumulator,curValue)
// },arr[0])

// 4. Implement the `reduce` function to count the occurrences of each element in an array.
// 5. Use the `reduce` function to calculate the total price of items in a shopping cart array.
// let arr = [39,39,392,8392,839,3,3,93]
// const sum = arr.reduce((preValue,curValue) => {
//     return preValue + curValue
// },0)
// console.log(sum)


// 6. Apply the `reduce` function to create an object grouping array elements by a specific property.
// 7. Use the `reduce` function to flatten a nested array into a single-level array.
// 8. Implement the `reduce` function to calculate the product of an array of numbers.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const sum = arr.reduce((preValue,curValue) => {
//     return preValue * curValue
// },1)
// console.log(sum)
// 9. Use the `reduce` function to merge an array of objects into a single object.
// const users = [
//     { name: "ddokdo", age: 15 },
//     { name: "djdok", age: 12 },
//     { name: "dodkd", age: 10 },
//     { name: "dokdok", age: 8 }

// ]
// const names = users.reduce((preValue,curValue) => {
//     return {...preValue, ...curValue}
// },{})
// console.log(names)
// 10. Apply the `reduce` function to create an array of unique values from an array with duplicates.




// 1. Create an object using property shorthand notation.
// const name = "dkdodok"
// const age = 10
// const city = "skoskos"
// const person = {name,age,city}
// console.log(person)
// 2. Use object destructuring to extract properties from an object into variables.
// const person = { 
//     name: 'dkdodok', 
//     age: 10, 
//     city: 'skoskos' 
//     }
// const {name,age,city} = person
// console.log(name)
// console.log(age)
// console.log(city)
// 3. Implement the spread operator to merge two objects into a new object.
// const obj1 = { 
//     name: "Alice", 
//     age: 25 
//     }
// const obj2 = { 
//     city: "New York", 
//     country: "USA" 
//     }
// const result = {...obj1, ...obj2}
// console.log(result)

// 4. Use destructuring to swap the values of two properties in an object.
// const obj = {
//     a:1,
//     b:2
// }

// let result = obj.a
// obj.a = obj.b
// obj.b = result
// console.log(obj)
// 5. Create a function that takes an object as a parameter and uses destructuring to access its properties.
// function destructuring(obj){
//     const {name,age,...city} = obj
//     console.log(name)
// }
// destructuring({ 
//         name: 'dkdodok', 
//         age: 10, 
//         city: 'skoskos' 
// })
// // 6. Use the spread operator to create a shallow copy of an object.
// const person = { 
    // name: 'dkdodok', 
    // age: 10, 
    // city: 'skoskos' 
// }
// const copy = {...person}
// console.log(copy)
// 7. Implement the spread operator to add new properties to an existing object.
// const person = { 
//     name: 'dkdodok', 
//     age: 10, 
//     city: 'skoskos' 
// }
// let country = "dkodkod"
// const newObj = {...person,country}
// console.log(newObj)
// 8. Use destructurizg to assign default values to properties when they are missing from an object.
// const person = { 
//     age: 10, 
//     city: 'skoskos' 
// }
// const {name = "uknown",age = 0,city = "dokodkodk"} = person
// console.log(name,age,city)
// 9. Create an object with a dynamic property name using a variable.
// const person = { 
//     age: 10, 
//     city: 'skoskos' 
// }
// person.name = "soksko"
// console.log(person)
// 10. Use object destructuring in a function's parameter list to extract specific properties from an argument object.


// 1. Create a promise that resolves after 2 seconds and use `then` to log a message.
// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => console.log("yes"),2000)
// })
// promise
//     .then(res => {
//         return res
//     })
//     .catch(error => {
//         return error
//     })
// 2. Write an async function that waits for a promise to resolve and then logs the result.
// const func = async () => {
//     let promise = new Promise((resolve,reject) => {
//         console.log("yes")
//     })

//     const res = await promise
//     console.log(res)
// }
// func()

// 3. Create a promise that rejects with an error and use `catch` to handle the error.
// let promise = new Promise((resolve,reject) => {
//     reject("no")
// })
// promise
//     .then(res => {
//         return res
//     })
//     .catch(error => {
//         console.log(error)
//     })
// 4. Write an async function that uses `try` and `catch` to handle errors from an awaited promise.
// const func = async () => {
//     try{
//         const result = await new Promise((resolve,reject) => {
//             reject("no")
//         })
//     }catch(error){
//         console.log(error)
//     }
// }
// func()

// 5. Chain multiple promises together using `then` and `catch` to handle any errors.
// 6. Write an async function that waits for multiple promises to resolve using `Promise.all`.

// 7. Create a promise that resolves with a value and use `then` to transform the value before logging it.
// 8. Write an async function that uses `await` to fetch data from an API and logs the result.
// const product = async (api) => {
//     try{
//         const res = await fetch(api)
//         const data = await res.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// product('https://fakestoreapi.com/products/1')

// 9. Use `Promise.race` to handle multiple promises and log the first one to resolve.
// const promise1 = new Promise((resolve,reject) => {
//     return resolve("Instant Promise")
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),1000)
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 3"),2000)
// })
// Promise.race([promise1,promise2,promise3])
// .then(reso => {
//     console.log(reso)
// })
// 10. Write an async function that retries a failed promise a specified number of times before rejecting. 