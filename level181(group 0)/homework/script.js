const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/' || req.url === '/index.html'){
        res.end(`
         <html>
            <head>
                <title>Server Response</title>
            </head>
            <body>
                <h1>Hello from server</h1>
            </body>
        </html>`)
    }else if(req.url === '/user' && req.method === 'GET'){
        const user = [{name:'ddlpddlp',email:'odejoel@gmail.com'},{name:'wpwldld',email:'flcpdldjdod@gmail.com'},{name:'woejjdd',email:'ffdoklpd@gmail.com'}]
        res.end(JSON.stringify(user))
    }else if(req.url === '/users' && req.method === 'POST'){
        let bodyChunks = []
        req.on('data',(chunk) => {
            bodyChunks.push(chunk)
        })
        req.on('end', () => {
            try {
                const body = Buffer.concat(bodyChunks).toString()
                const parsedData = JSON.parse(body)
                console.log(parsedData);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(
                    JSON.stringify({ message: 'Successfully added account', data: parsedData })
                );
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
    }
    else{
        res.statusCode = 404
        res.end('not found')
    }
})

server.listen(3000, () => {
    console.log('server is running on port 3000')
})