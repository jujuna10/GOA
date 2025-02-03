const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(express.json()) 
app.use(cors())


app.get('/products', (req, res) => {

    const {sort,maxPrice,limit} = req.query

    fs.readFile('./product.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }

        const products = JSON.parse(data)
        let result = [...products];

        if (maxPrice) {
            const maxPriceNum = parseFloat(maxPrice)
            result = result.filter((product) => product.price <= maxPriceNum)
        }

        if (sort === 'ascending') {
            result.sort((a, b) => a.price - b.price)
        } else if (sort === 'descending') {
            result.sort((a, b) => b.price - a.price)
        }

        if(limit){
            result = result.slice(0, parseInt(limit))
        }

        res.json(result); 

    })
})

app.get('/products/:id', (req, res) => {

    const {id} = req.params

    fs.readFile('./product.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }

        const products = JSON.parse(data)
        let result = [...products];

        const product = result.find((product) => product.id === parseInt(id))
        if(!product){
            res.status(404).json({error: 'Product not found'})
        }  else {
            res.json(product);
        }


    })
})

app.post('/products', (req,res) => {
    const {name, price} = req.body

    fs.readFile('./product.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
        }

        let products = JSON.parse(data)
        const priceNum = parseFloat(price);
        if(!name || !price){
            res.status(400).json({error: 'Missing required parameters'})
        }
        const newProduct = { id: products.length + 1, name, price: priceNum };
        products.push(newProduct)
        fs.writeFile('./product.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ message: 'Error saving product' });
            }

            res.status(201).json(newProduct)
        });
    })
})

app.put('/products/:id', (req, res) => {

    const {id} = req.params
    const {name, price} = req.body

    fs.readFile('./product.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }

        const products = JSON.parse(data)
        let result = [...products];

        const product = result.find(product => product.id === parseInt(id))
        product.name = name
        product.price = parseFloat(price)
        res.json(result)

    })

})

app.delete('/products/:id', (req, res) => {

    const {id} = req.params

    fs.readFile('./product.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }

        const products = JSON.parse(data)
        let result = [...products];

        result = result.filter((product) => product.id !== parseInt(id))

        res.json(result); 

    })
})




app.listen(3000,() => {
    console.log('Server is running on port 3000')
})