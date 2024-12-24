const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Hello from server')
})

server.listen(5500, () => {
    console.log('server is running on port 5500')
})