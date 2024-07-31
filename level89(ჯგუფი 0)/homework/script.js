// 1) Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Use a for...of loop to iterate through the array.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// sum = 0
// for(let i of numbers){
//     sum += i
// }
// console.log(sum)

// 2) Write a function that takes an array of strings as input and returns the longest word in the array. Use a for...of loop to iterate through the array.
// const strings = ["dodjdjo","dokkod","dkosjosk","dokkoskos","dkokdokd"]
// let largest = strings[0]
// for(let i of strings){
//     if(i.length > largest.length){
//         largest = i
//     }
// }
// console.log(largest)

// 3) Write a function that takes an object as input and returns the count of its properties. Use a for...in loop to iterate through the object's properties.
// const users = {
//         name:"djsos",
//         status:"user",
//         age:20,
//         country:"spain"
// }

   
// let count = 0
// for(let i in users){
//     count += 1
// }
// console.log(count)

// 4) Write a function that takes an object as input and returns an array containing all the keys of the object. Use a for...in loop to iterate 
//through the object's properties and push each key into an array.
// const users = {
//         name:"djsos",
//         status:"user",
//         age:20,
//         country:"spain"
// }

// let newArr = []
// for(let i in users){
//     newArr.push(i)
// }
// console.log(newArr)

// 5) Using comments, explain what the scope is. Then write about let, const and var scopes.
// სკოუპი არის ცვლადის გავრცელების არეალი ანუ სად შეიძლება გამოვიყენოთ ცვლადი.მაგალითად არსებობს გლობალური და ლოკალური ცვლადები.გლობალურია ცვლადი თუ ის არ არის კოდის ბლოკში
// ანუ ფუნქციაში,ციკლში ან if,else-ის ბლოკში.არსებობს სამი ტიპის ცვლადი let რომლის მნიშვნელობის შეცვლა შეძლება,const რომლის მნიშვნელობის შეცვლა არ შეიძლება ამიტომ მას
// არ ქვია ცვლადი ის არის ინფორმაციის საცავი და ბოლო მესამე ტიპი var რომელიც არ გამოიყენება ხშირად რადგან მას აქვს მინუსები მაგალითად მას არ აქვს საზღვრები ფუნქციის ბლოკის
// გარდა ასევე შეიძლება მისი გამოყენება მის დეკლარაციამდე

// 6) Using comments, explain what the hoisting is.
// ჰოისტინგი არის როდესაც ფუნქცია ადის ავტომატურად კოდის თავში 

// Arrow function tasks:
// 1) Write an arrow function that takes a number as input and returns its square.
// const square = num =>  num ** 2
// console.log(square(10))

// 2) Write an arrow function that takes an array of numbers as input and returns a new array containing only the even numbers.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// let newArr = []
// const evenNumbers = arr => {
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 == 0){
//             newArr.push(i)
//         }
             
//     }
// }
// evenNumbers(numbers)
// console.log(newArr)


// 3) Write an arrow function that takes an array of numbers as input and returns the sum of all the elements in the array.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const sumOfNumbers = arr => {
//     return arr.reduce((preValue,curValue) => preValue + curValue,0)
// }
// const sum = sumOfNumbers(numbers)
// console.log(sum)


// 4) Write an arrow function that generates a Fibonacci sequence of a given length.
// const fibonach = num => {
//     if(num <= 1){
//         return num
//     }
//     return fibonach(num - 1) + fibonach(num - 2)
// }
// console.log(fibonach(10))


// 5) Write an arrow function that takes a string as input and returns true if it's a palindrome, false otherwise.
// const isPalindrome = string => {
//     if(string === string.split("").reverse().join("")){
//         return true
//     }
//     return false
// }
// const result = isPalindrome("level")
// console.log(result)

// 6) Write a script that toggles the visibility of a specific element when a button is clicked. Use addEventListener with an arrow function to handle the click event.
// const p = document.getElementById("p")
// const btn = document.getElementById("btn")
// btn.addEventListener("click", () =>{
//     p.style.color = "yellow"
// })