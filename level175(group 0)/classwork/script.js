const fs = require('fs');

process.stdin.on('data',(data) => {
    const input = data.toString().trim()

    fs.appendFile('data.txt', `\n${input}`, (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log('Data appended successfully')
        }
    })

    if(input === 'exit'){
        process.exit()
    }
})