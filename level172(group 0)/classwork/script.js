// const event = require('events')
// const registration = new event.EventEmitter()

// const accounts = []

// registration.on('registration',account => {
//     console.log('account creates')
//     accounts.push(account)
//     console.log(accounts)
// })


// class Player{
//     constructor(username,email,lvl,score){
//         this.username = username,
//         this.email = email,
//         this.lvl = lvl,
//         this.score = score
//     }

//     static createAccount(username,email,lvl,score){
//          const account = new Player(username,email,lvl,score)
//          registration.emit('registration',account)
//          return account
//     }
// }

// const firstPlayer = Player.createAccount('dkodok','kdokd@gmail.com','20','1200')


const numbers = []
let sum = 0

process.stdin.on('data',(data) => {

    const numb = parseInt(data)
    numbers.push(numb)
    if(numbers.length === 10){
        sum = numbers.reduce((prev,curr) => prev + curr,0)
        console.log(sum)
        process.exit()
    }
})

