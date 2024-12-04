const os = require('os')
let events = require('events')
// console.log(os.type())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.freemem())

// const time = os.uptime()

// const hours = Math.floor(time / 3600);
// const minutes = Math.floor((time % 3600) / 60);
// const seconds = Math.floor(time % 60);

// console.log(seconds,minutes,hours)

// console.log(process.env)

// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// let emmiter = new events.EventEmitter()

// emmiter.on('greet',function(name){
//     console.log('hello ' + name)
// })

// emmiter.emit('greet','dkodkod')

// let data = new events.EventEmitter()

// data.on('data',function(obje){
//     console.log(obje)
// })

// const words = ['dodkd','dkodod']
// data.emit('data',words)

// let timer = new events.EventEmitter()

// timer.on('start',function(){
//     console.log('start')
// })

// timer.on('stop',function(){
//     console.log('stop')
// })

// timer.emit('start')
// timer.emit('stop')



let remove = new events.EventEmitter()
const listener1 = () => console.log(1);
const listener2 = () => console.log(2);
const listener3 = () => console.log(3);
const listener4 = () => console.log(4);

remove.on('listener', listener1);
remove.on('listener', listener2);
remove.on('listener', listener3);
remove.on('listener', listener4);

remove.emit('listener')

remove.removeListener('listener',listener4)
remove.emit('listener')

