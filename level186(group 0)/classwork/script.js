const http = require('http');
const fs = require('fs');

function writeData(data){
    fs.readFile('data.json', 'utf8', (err,fileData) => {
        if(err){
            throw err;
        }
        const accaount = fileData ? JSON.parse(fileData) : []
        const newAccount = JSON.parse(data)
        accaount.push(newAccount)

        fs.writeFile('data.json', JSON.stringify(accaount), (err) => {
            if(err){
                throw err;
            }
            console.log('Account added successfully')
        })
    })
}

const products = [
    { name: 'Product 1', id: 1, price: 19.99 },
    { name: 'Product 2', id: 2, price: 29.99 },
];

const accounts = [
    { name: 'Account 1', id: 1},
    { name: 'Account 2', id: 2},
    { name: 'Account 3', id: 3},
    { name: 'Account 4', id: 4},
    { name: 'Account 5', id: 5},
    { name: 'Account 6', id: 6},
]

const server = http.createServer((req,res) => {
    if(req.url === '/products' && req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(products))
    }else if(req.url === '/accounts' && req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(accounts))
    }else if(req.url === '/accounts' && req.method === 'POST'){
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            writeData(body)
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(body))
            console.log('saved')
        })
    }
    else if(req.url !== '/products' || req.url !== '/accounts'){
        res.statusCode = 404
        res.end('not found')
    }
})

server.listen(4001, () => {
    console.log('server is running on port 4001')
})






