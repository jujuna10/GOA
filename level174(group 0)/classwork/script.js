const errorFirstCallback = (err,data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
}

const filter = (input,callback) => {
    if(input === 1 || input === 2 || input === 3 || input === 4 || input === 5){
        callback(null,input)
    }else{
        const err = new Error('input is not correct')
        callback(err,input)
    }
}

console.log('choose 1 | 2 | 3 | 4 | 5')
process.stdin.on('data',(data) => {
    try{
        const number = parseInt(data.toString().trim())
        filter(number,errorFirstCallback)
        process.exit()
    }catch(err){
        console.log(err.message)
        process.exit()
    }

})