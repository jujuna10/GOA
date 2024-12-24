const url = require('url')

// const fbUrl = 'https://www.facebook.com/profile.php?id=100089057330630'

// const urlObj = new URL(fbUrl)

// console.log(urlObj)

// console.log(urlObj.origin)
// console.log(urlObj.protocol)
// console.log(urlObj.host)
// console.log(urlObj.pathname)
// console.log(urlObj.search)

// const youtube = 'https://www.youtube.com/watch?v=NP2GscO3E6g'

// const urlYoutube = new URL(youtube)

// urlYoutube.protocol = 'http'

// console.log(urlYoutube.protocol)
// urlYoutube.pathname = '/dkpdkd.pdpddpkd'


// urlYoutube.protocol = 'http'
// urlYoutube.hostname = 'dokdkod'
// urlYoutube.pathname = '/dkodkdoodk'


// const updated = urlYoutube.toString()

// console.log(updated)

const products = [
    { name: 'Product 1', id: 1, price: 19.99 },
    { name: 'Product 2', id: 2, price: 29.99 },
    { name: 'Product 3', id: 3, price: 39.99 },
    { name: 'Product 4', id: 4, price: 49.99 },
    { name: 'Product 5', id: 5, price: 59.99 }
];


const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/products' && req.method === 'GET'){
        const productss = JSON.stringify(products)
        res.end(productss)
        console.log('GET')
    }else if(req.url === '/products' && req.method === 'POST'){
        products.push({name: 'product 6', id: 6, price:59.99})
        const productss = JSON.stringify(products)
        res.end(productss)
        console.log('POST')

    }else if(req.url === '/products' && req.method === 'DELETE'){
       products.pop()
       const productss = JSON.stringify(products)
       res.end(productss)
       console.log('DELETE')

    }
    else{
        res.statusCode = 404
        res.end('not found')
    }
})

server.listen(3100, () => {
    console.log('server is running on port 3000')
})






