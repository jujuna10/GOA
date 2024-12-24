const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/' || req.url === '/index.html'){
        res.end('hello on website')
    }else if(req.url === '/users'){
        const user = [{name:'dkoodkd',email:'odkdd@gmail.com'},{name:'dkoodkd',email:'odkdd@gmail.com'},{name:'dkoodkd',email:'odkdd@gmail.com'},{name:'dkoodkd',email:'odkdd@gmail.com'},{name:'dkoodkd',email:'odkdd@gmail.com'}]
        res.end(JSON.stringify(user))
    }else if(req.url === '/products'){
        const products = ['dokokd','doddko','dkdkod','dkodkdo']
        res.end(JSON.stringify(products))
    }else{
        res.end('not found')
    }
})

server.listen(5500, () => {
    console.log('server is running on port 5500')
})