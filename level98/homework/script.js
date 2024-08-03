// 1. Simple Fetch Request: Make a GET request to a public API (e.g., JSONPlaceholder) and log the response.
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
  

// 2. Fetch with Then: Fetch data from an API and log the JSON response using .then().
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
  
// 3. Handle Errors with Catch: Fetch data from an invalid URL and handle the error using .catch().
// fetch('https://jsonplaceholer.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
  
// 4. Finally Block: Make a fetch request and use .finally() to log a message that the request has completed.
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
//     .finally(() => {
//         console.log("request is complited")
//     })
  
// 5. Fetch and Display: Fetch data from an API and display it on a webpage.
// const p = document.getElementById("p")
// const p2 = document.getElementById("p2")
// const p3 = document.getElementById("p3")
// const p4 = document.getElementById("p4")

// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//         p.textContent = data.title
//         p2.textContent = data.userId
//         p3.textContent = data.id
//         p4.textContent = data.completed
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
   
// 6. Chaining Multiple Then: Fetch data and chain multiple .then() methods to process the data in stages.

// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
// 7. Fetching Image: Fetch an image from a URL and display it on the webpage.
// const img = document.getElementById("img")
// fetch('https://jsonplaceholder.typicode.com/photos/10')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//         img.src = data.url
        
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
// 8. Delayed Fetch Request: Use setTimeout to delay a fetch request by a few seconds.
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         setTimeout(() => console.log(data),2000)
//     })

// 9. Fetch and Delay JSON Parsing: Fetch data and use setTimeout to delay parsing the JSON response.
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return new Promise((resolve) => {
//             setTimeout(() => resolve(res.json()),2000)

//         })

//     })
//     .then((data) => {
//         console.log(data)
//     })
// 10. Chained Delayed Fetch: Chain multiple fetch requests with setTimeout delays between them.
// 11. Delayed Error Handling: Fetch data and use setTimeout to delay error handling in .catch().
// fetch('https://jsonplaceholer.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         setTimeout(() => console.log('Reject reason:', err),2000)
//     })
    
// 12. Completion Log with Delay: Use setTimeout in .finally() to delay logging the completion message.
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
//     .finally(() => {
//         setTimeout(() => console.log("request is complited"),2000)
//     })
// 13. Fetch and Alert: Fetch data from an API and show an alert with the fetched data after a delay using setTimeout.
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {        
//         setTimeout(() => alert(data),2000)
//     })
// 14. Fetch and Conditional Display: Fetch data from an API and display it on the webpage only if certain conditions are met, using setTimeout to delay the display.
// const p = document.getElementById("p")
// const p2 = document.getElementById("p2")
// const p3 = document.getElementById("p3")
// const p4 = document.getElementById("p4")
// let num = 10
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         if(num > 0){
//         setTimeout(function(){
//             p.textContent = data.title,
//             p2.textContent = data.userId,
//             p3.textContent = data.id,
//             p4.textContent = data.completed
//         },2000)

            
//         }
        
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
// 15. Fetch and Form Submission: Use fetch to submit form data asynchronously with a delay using setTimeout before handling the response.