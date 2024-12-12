// 1.    Create and trigger a custom event.

// const EventEmitter = require('events')

// const emmiter = new EventEmitter()

// emmiter.on('event',(data) => {
//     console.log(data)
// })

// emmiter.emit('event','hello')

// 2.    Pass data to an event and handle it.

// const EventEmitter = require('events')

// const emmiter = new EventEmitter()

// emmiter.on('event',(name,age) => {
//     console.log(name,age)
// })

// emmiter.emit('event','dkodko',20)

// 3.    Create a custom event that triggers multiple listeners.

// const EventEmitter = require('events')

// const emmiter = new EventEmitter()

// emmiter.on('event',(data) => {
//     console.log('first ',data)
// })

// emmiter.on('event',(data) => {
//     console.log('second ',data)
// })


// emmiter.emit('event','hello')

// 4.    Remove a listener from a custom event.

// const EventEmitter = require('events')

// const emmiter = new EventEmitter()

// const first = (data) => {
//     console.log('first',data)
// }

// const second = (data) => {
//     console.log('second',data)
// }


// emmiter.on('event',first)

// emmiter.on('event',second)

// emmiter.removeListener('event',first)

// emmiter.emit('event','hello')

// 5.    Use the once method to create a one-time event listener.

// const EventEmitter = require('events')

// const emmiter = new EventEmitter()

// emmiter.once('event',(data) => {
//     console.log(data)
// })

// emmiter.emit('event','hello')




// 1.    Read user input from the console and print it back with a prefix.

// process.stdin.on('data',(data) => {
//     process.stdout.write(data)
//     process.exit()
// })

// 2.    Create a program that continuously reads user input until a specific keyword is entered to exit.

// const word = 'hello'

// process.stdin.on('data',(data) => {
//     if(data.toString().trim() === word){
//         process.exit()
//     }
// })

// 4.    Implement a program that transforms user input to uppercase and prints it to the console.

process.stdin.on('data', (data) => {
    const upperCaseData = data.toString().toUpperCase()
    console.log(upperCaseData)
    process.exit()
})

// 5.    Create a progress bar simulation that outputs updates to the console using process.stdout.
