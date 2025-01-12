const products = [
    { name: 'Product 1', id: 1, price: 19.99 },
    { name: 'Product 2', id: 2, price: 29.99 },
    { name: 'Product 3', id: 3, price: 39.99 },
    { name: 'Product 4', id: 4, price: 49.99 },
    { name: 'Product 5', id: 5, price: 59.99 }
];

const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if(req.url === '/products' && req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(products))
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})