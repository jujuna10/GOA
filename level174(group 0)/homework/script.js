const events = require('events')

const emmiter = new events()
// emmiter.on('start', () => {
//     console.log('start')
// })
// emmiter.emit('start')

// emmiter.on('userJoined', (name) => {
//     console.log('start', name)
// })
// emmiter.emit('userJoined','dkokd')

// const order = new events()

// order.on('details', (details) => {
//     console.log(details.name, details.price)
// })

// order.on('email', (email) => {
//     console.log(email)
// })

// order.on('update', (update) => {
//     console.log(update)
// })

// order.emit('details', {name: 'dkodkod', price: 100})
// order.emit('email', 'dkodkod@gmail.com')
// order.emit('update', 'order updated')

// emmiter.once('shutdown', () => {
//     console.log('shutdown')
// })

// emmiter.emit('shutdown')

// const firstErrorCallback = (err,data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// }

// const fs = require('fs')

// const filereader = new events()

// filereader.on('error', (err) => {
//     console.log(err)
// })

// filereader.on('fileread', (file) => {
//     fs.readFile(file,'utf8',(err,data) => {
//         if(err){
//             filereader.emit('error',err)
//         }
//         else{
//             console.log('successful')
//         }
//     })
// })

// filereader.emit('fileread','data.txt')

// process.stdin.on('data', (name) => {
//     console.log('hello',name.toString().trim())
//     process.exit()
// })

// process.stdin.on('data', (data) =>{

//     const input = data.toString().trim()
//     if(input === 'exit'){
//         process.exit()
//     }else{
//         process.stdout.write(data.toString().trim())
//     }
// })

// process.stdin.on('data', (data) =>{

//     const input = parseInt(data.toString().trim())
//     process.stdout.write(`you are ${input} years old`)
//     process.exit()
// })

// process.stdin.on('data', (data) =>{

//     const input = parseInt(data.toString().trim())
//     if(isNaN(input)){
//         console.log('Invalid input. Please enter a number')
//     }else{
//         console.log(input)
//         process.exit()

//     }
// })


// process.stdin.on('data', (data) =>{

//     const input = parseInt(data.toString().trim())
//     for(let i = input; i >= 0; i--){
//         process.stdout.write(i.toString() + '\n')
//     }
//     process.exit()
// })

// const divide = (a,b) => {
//     try{
//         if(b === 0 || a === 0){
//             throw new Error('Cannot divide by zero')
//         }
//         else{
//             return { result1: a / b, result2: b / a };
//         }
//     }catch(error){
//         console.log(error)
//     }
// }

// process.stdin.on('data', (data) => {
//     const input = data.toString().trim().split(',')
//     if(input.length === 2){
//         const [a,b] = input
//         const result = divide(a,b)
//         if (result) {
//             console.log(`a / b = ${result.result1}, b / a = ${result.result2}`); // Log results
//         }

//     }
//     else{
//         console.log('please enter two numbers')
//     }
//     process.exit()
    
// })


// const isPositive = (x) => {
//     try{
//         if(x < 0){
//             throw new Error('oops, x is negative')
//         }
//         else{
//             return 'positive'
//         }
//     }catch(error){
//         console.log(error)
//     }
// }

// process.stdin.on('data', (data) => {
//     const input = parseInt(data.toString().trim())
//     if(isNaN(input)){
//         console.log('Invalid input')
//     }
//     else{
//         const result = isPositive(input)
//         if(result){
//             console.log(result)
//         }
//     }
//     process.exit()
    
// })

// const error = () => {
//     const a = 0
//     try{
//         if(a === 0){
//             throw new Error('oops')
//         }
//         else{
//             console.log('no Error')
//         }
//     }catch(error){
//         console.log(error.stack)
//     }
// }

// error()

const error = () => {
    const a = 0
    try{
        if(a === 0){
            throw new Error('oops')
        }
        else{
            console.log('no Error')
        }
    }catch(error){
        console.log(error.message)
        console.log(error.stack)
        console.log(error.name)
    }
}

error()






