// 1. Create a promise that resolves to "Hello, World!" and log the result.
// const promise = new Promise((resolve,reject) => {
//     if(true){
//         console.log("hello world")
//     }
//     else{
//         console.log("reasons")
//     }
// })

// 2. Create a promise that resolves after 2 seconds with the message "Resolved after 2 seconds".
// const promise = (resolve,reject) => {
//     if(true){
//         setTimeout(() => {resolve("resolved after 2 seconds")} ,2000)
//     }
//     else{
//         setTimeout(() => {resolve("reasons")} ,2000)

//     }
// }
// const executere = () => {
//     return new Promise(promise)
// }

// executere().then((resolveValue) => {
//     console.log(resolveValue)
// },(rejectReasons) => {
//     console.log(rejectReasons)
// })

// 3. Chain two promises, where the first promise resolves to "First" and the second appends " -> Second".
// let num = 10
// const promise = new Promise((resolve,value) => {
//     if(num > 0){
//         console.log("first")
//     }
//     else{
//         console.log("second")
//     }
// })
// 4. Use multiple .then callbacks to handle different stages of promise resolution.
// let num = 100
// const promise = (resolve,reject) => {
//     if(num < 100){
//         setTimeout(() => {resolve("resolved after 2 seconds")} ,2000)
//     }
//     else{
//         setTimeout(() => {resolve("reasons")} ,2000)

//     }
// }
// const executere = () => {
//     return new Promise(promise)
// }

// executere()
//     .then((resolveValue) => {
//         console.log(resolveValue)
//     })
//     .then((rejectReasons) => {
//         console.log(rejectReasons) 
//     })

// 5. Create a promise that rejects after 1 second with a specific error message.
// const promise = (resolve,reject) => {
//     if(false){
//         setTimeout(() => {resolve("correct")},1000)
//     }
//     else{
//         setTimeout(() => {resolve("error")},1000)

//     }
// }
// const executere = () => {
//     return new Promise(promise)
// }

// executere()
//     .then((resolveValue) => {
//         console.log(resolveValue)
//     })
//     .then((rejectReasons) => {
//         console.log(rejectReasons) 
//     })

// 6. Create a function that prints messages "One", "Two", and "Three" with delays of 1, 2, and 3 seconds respectively.
// function asynchronization(){
//     setTimeout(() => {
//         console.log("one")
//     }, 1000);
//     setTimeout(() => {
//         console.log("two")
//     }, 2000);
//     setTimeout(() => {
//         console.log("three")
//     }, 3000);
// }

// asynchronization()

// 7. Chain multiple promises that resolve with delays, printing messages sequentially.
// let num = 100
// const promise = (resolve,reject) => {
//     console.log("pending")
//     if(num > 0){
//         setTimeout(() => {resolve("you can buy it")} ,2000)
//     }
//     else{
//         setTimeout(() => {resolve("sold out")} ,2000)

//     }
// }
// const executere = () => {
//     return new Promise(promise)
// }

// executere().then((resolveValue) => {
//     console.log(resolveValue)
// },(rejectReasons) => {
//     console.log(rejectReasons)
// })
// 8. Create a promise that resolves successfully or rejects with a specific error, and handle the error using .catch.
// let num = 400
// const promise = (resolve,reject) => {
//     console.log("pending")
//     if(num > 0){
//         setTimeout(() => {resolve(">")} ,2000)
//     }
//     else{
//         setTimeout(() => {resolve("<")} ,2000)

//     }
// }
// const executere = () => {
//     return new Promise(promise)
// }

// executere()
//     .then((resolveValue) => {
//         console.log(resolveValue)
//     })   
//     .catch((rejectReasons) => {
//         console.log(rejectReasons)
// })

// 9. Create a promise that resolves to a message and use .then to handle the resolved value.
// let string = "dokdkodko"
// const promise = (resolve,reject) => {
//     if(string.length > 0){
//         console.log("is not empty")
//     }
//     else{
//         console.log("empty")

//     }
// }
// const executere = () => {
//     return new Promise(promise)
// }

// executere()
//     .then((resolveValue) => {
//         console.log(resolveValue)
//     })   
//     .catch((rejectReasons) => {
//         console.log(rejectReasons)
// })
// 10. Chain multiple .then handlers to process intermediate results sequentially.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const promise = new Promise((resolve,reject) => {
//     if(arr.length === 10){
//         console.log("length is 10")
//     }
//     else{
//         console.log("length is not 10")
//     }
// })

// promise.then((resolveValue) => {
//     console.log(resolveValue)
// }) .then((rejectReasons) => {
//     console.log(rejectReasons)
// })