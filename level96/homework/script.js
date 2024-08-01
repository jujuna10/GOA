// 1. Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".
// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => console.log("task 1 complete"),2000)
// })

// 2. Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.
// let promise = new Promise((resolve,reject) => {
//     reject("Task 2 failed")
// })
// promise
//     .catch((error) => {
//         console.log(error)
//     })
// 3. Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another 
//.then handler to log the doubled number.
// let promise = new Promise((resolve,reject) => {
//     resolve(5)
// })
// promise
//     .then(res => {
//         return res * 2
//     }).then(result => {
//         console.log(result)
//     })
// 4. Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second".
// function first(){
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("First"),2000)
//     })
// }
// function second(){
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Second"),3000)

//     })
// }

// first()
//     .then(fi => {
//         console.log(fi)
//         return second()
//     }).then(se => {
//         console.log(se)
//     })
// 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle
// the rejection with a .catch to log the error message.
// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => reject("Task 3 failed"),2000)
// })
// promise
//     .catch((error) => {
//         console.log(error)
//     })


// 6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".
// let randomSecond = [1000,2000,3000,4000,5000]
// let randomSecondFromArray = randomSecond[Math.floor(Math.random() * randomSecond.length)]
// function randomSecondPromise(){
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => console.log(randomSecondFromArray,"Task 1 complete"),randomSecondFromArray)
//     })
// }
// randomSecondPromise()
// 7. Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another
// .then that waits for another random delay between 1 and 3 seconds before logging "Second".

// let randomSecond = [1000,2000,3000]
// let randomSecondFromArray = randomSecond[Math.floor(Math.random() * randomSecond.length)]
// function first(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve(`${randomSecondFromArray},first`),randomSecondFromArray)
//     })
// }

// function second(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve(`${randomSecondFromArray},second`),randomSecondFromArray)

//     })
// }
// first()
//     .then(fi => {
//         console.log(fi)
//         return second()
//     }).then(se => {
//         console.log(se)
//     })
// 8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed".
// Handle the rejection with a .catch to log the error message.
// let randomSecond = [1000,2000,3000,4000]
// let randomSecondFromArray = randomSecond[Math.floor(Math.random() * randomSecond.length)]
// function first(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => reject(`${randomSecondFromArray},Task 3 failed`),randomSecondFromArray)
//     })
// }
// first()
//     .catch(error => {
//         console.log(error)
//     })

// 9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" 
//if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".
// let randomSecond = [1000,2000,3000,4000,5000]
// let randomSecondFromArray = randomSecond[Math.floor(Math.random() * randomSecond.length)]

// function isGreather(){
//     return new Promise((resolve,reject) => {
//         if(Math.random() > 0.5){
//             resolve("Task 1 complete")
//         }
//         else{
//             reject("Task 1 was quick")
//         }
//     })
// }
// isGreather()
//     .then(reso => {
//         console.log(reso)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// 10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less 
//than 0.3, reject with an error message    "Task 3 failed". Otherwise, resolve with 
//the message "Task 3 complete". Handle the rejection with a .catch to log the error message.

// let randomSecond = [1000,2000,3000,4000,5000]
// let randomSecondFromArray = randomSecond[Math.floor(Math.random() * randomSecond.length)]
// function isGreather(){
//     return new Promise((resolve,reject) => {
//         if(Math.random() > 0.3){
//             resolve("Task 3 complete")
//         }
//         else{
//             reject("Task 3 failed")
//         }
//     })
// }
// isGreather()
//     .then(reso => {
//         console.log(reso)
//     }).catch(error => {
//         console.log(error)
//     })




// 11. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively.
// Use Promise.all to log all messages once all Promises are resolved.
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 1"),1000)
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),2000)
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 3"),3000)
// })

// Promise.all([promise1,promise2,promise3]).then(reso => {
//     console.log(reso)
// })
// 12. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.all to log all messages 
// once all Promises are resolved.

// let randomSecond = [1000,2000,3000,4000,5000]
// let randomSecondFromArray = randomSecond[Math.floor(Math.random() * randomSecond.length)]
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 1"),randomSecondFromArray)
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),randomSecondFromArray)
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 3"),randomSecondFromArray)
// })
// Promise.all([promise1,promise2,promise3]).then(reso => {
//     console.log(reso)
// })

// 13. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the 
// rejection and log the error message.
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 1"),1000)
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),4000)
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => reject("Promise failed"),2000)
// })
// Promise.all([promise1,promise2,promise3]).then(reso => {
//     console.log(reso)
// }).catch(error => {
//     console.log(error)
// })

// 14. Create three Promises that resolve or reject based on random conditions. Use Promise.all to log all resolved messages or handle the rejection.
// const promise1 = new Promise((resolve,reject) => {
//     resolve("Promise 1")
// })
// const promise2 = new Promise((resolve,reject) => {
//     reject("Promise 2")
// })
// const promise3 = new Promise((resolve,reject) => {
//     reject("Promise3")
// })
// Promise.all([promise1,promise2,promise3]).then(reso => {
//     console.log(reso)
// }).catch(error => {
//     console.log(error)
// })
// 15. Create three Promises that resolve with numbers after random delays. Use Promise.all to get the results, then chain another .then to 
//calculate and log the sum of the numbers.
// const promise1 = new Promise((resolve,reject) => {
//     resolve(10)
// })
// const promise2 = new Promise((resolve,reject) => {
//     resolve(100)
// })
// const promise3 = new Promise((resolve,reject) => {
//     resolve(1000)
// })
// let array = Promise.all([promise1,promise2,promise3]).then(reso => {
//     // console.log(reso)
//     let nums = reso.map(Number)
//     let sum = nums.reduce((prevalue,currValue) => {
//         return prevalue + currValue
//     },0)
//     console.log(sum)
// })

// 16. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. 
//Use Promise.race to log the message from the first Promise that resolves.
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 1"),1000)
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),2000)
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 3"),3000)
// })

// Promise.race([promise1,promise2,promise3]).then(reso => {
//     console.log(reso)
// })

// 17. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.race to log the message 
//from the first Promise that resolves.

// let delay = () => Math.floor(Math.random() * 5000) + 1000
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 1"),delay())
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),delay())
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 3"),delay())
// })
// Promise.race([promise1,promise2,promise3])
// .then(reso => {
//     console.log(reso)
// })

// 18. Create three Promises where one of them resolves immediately with the message "Instant Promise". Use Promise.race to log the message from the
// first Promise that resolves.
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

// 19. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.race to handle the 
//resolution or rejection and log the result or error.
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => reject("Promise 1"),2000)

// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 2"),1000)
// })
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("Promise 3"),4000)
// })
// Promise.race([promise1,promise2,promise3])
// .then(reso => {
//     console.log(reso)
// })
// .catch(error => {
//     console.log(error)
// })
 
// 20. Create three Promises that resolve based on random conditions (e.g., if a random number is greater than 0.5, resolve with a message; 
//otherwise, resolve after 2 seconds with a different message). Use Promise.race to log the message from the first Promise that resolves.
// function isGreather(){
//     return new Promise((resolve,reject) => {
//         if(Math.random() > 0.5){
//             resolve("Task 1 complete")
//         }
//         else{
//             setTimeout(() => reject("Task 1 was quick"),2000)
//         }
//     })
// }
// const promise1 = isGreather()
// const promise2 = isGreather()
// const promise3 = isGreather()

// Promise.race([promise1,promise2,promise3])
//     .then(reso => {
//         console.log(reso)
//     })
//     .catch(error => {
//         console.log(error)
//     })




// 21. Fetch data from a URL and log the response to the console.
// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("error"))

// 22. Fetch data from an API and display it on a web page.

// const div = document.querySelector("div")

// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => { 
//         const html = `
//             <div class="product">
//                 <p class="title">${data.title}</p>
//                 <img class="product-img" src="${data.image}" alt="${data.title}">
//                 <p class="price">${data.price}</p>
//             </div>
//         `;
//         div.insertAdjacentHTML("afterbegin", html)
//     })
//     .catch(error => console.log("Error:", error))


// 23. Fetch JSON data from an API and display specific information (e.g., title, description) on a webpage.
// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => console.log(data.title,data.price))
//     .catch(error => console.log("error"))

// 24. Fetch data from an API and create a dropdown/select element with the fetched data.
// const div = document.querySelector("div")

// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => { 
//         const html = `
//             <div class="product">
//                 <select class="dropdown">
//                     <option>${data.title}</option>
//                     <option>${data.price}</option>


//                 </select>


//             </div>
            
//         `
//         div.insertAdjacentHTML("afterbegin", html)
//     })
//     .catch(error => console.log("Error:", error))

// 25. Fetch image URLs from an API and display them on a webpage.
// const div = document.querySelector("div")

// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => { 
//         const html = `
//             <div class="product">
//                 <img class="product-img" src="${data.image}" alt="${data.title}">
//             </div>
//         `;
//         div.insertAdjacentHTML("afterbegin", html)
//     })
//     .catch(error => console.log("Error:", error))