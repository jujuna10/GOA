const express = require('express')

const app = express()

const products = [{id:1, name: 'tomato'}, {id:2, name:'potato'}, {id:3, name: 'cheese'}, {id:4, name: 'bread'}]

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params
    const productId = parseInt(id)

    const product = products.find(product => product.id === productId)
    if(product){
        res.json(product)
    }else{
        res.json({error: 'Product not found'})
    }
})


const users = [{id:1, name:"john", lastName:'doe'}, {id:2, name:"mike", lastName:'smith'}]

app.get('/users/:username', (req,res) => {
    const {username} = req.params
    const user = users.find(user => user.name ===  username)
    if(user){
        res.json(user)
    }else{
        res.json({error: 'User not found'})
    }


})

app.get('/greet/:name/:age', (req,res) => {
    const {name, age} = req.params
    res.json({message: `Hello ${name}! You are ${age} years old.`})
})

app.get('/math/:operation/:num1/:num2', (req,res) => {
    const {operation, num1, num2} = req.params
    const num1Parsed = parseInt(num1)
    const num2Parsed = parseInt(num2)

    if(operation === 'add'){
        res.send(`<h1>${num1Parsed + num2Parsed}</h1>`)
    }else if(operation === 'minus'){
        res.send(`<h1>${num1Parsed - num2Parsed}</h1>`)
    }else if(operation === 'multiply'){
        res.send(`<h1>${num1Parsed * num2Parsed}</h1>`)
    }else if(operation === 'divide'){
        res.send(`<h1>${num1Parsed / num2Parsed}</h1>`)
    }
})

const wheater = [{city:'tbilisi', temp:'10c', status:'cold'}, {city:'gori', temp:'20c', status:'sunny'}]

app.get('/wheater/:city', (req,res) => {
    const {city} = req.params
    const weather = wheater.find(wheater => wheater.city === city)
    if(weather){
        res.json(weather)
    }else{
        res.json({error: 'City not found'})
    }
})

app.get('/product/:productId', (req,res) => {
    const {productId} = req.params
    const product = products.find(product => product.id === parseInt(productId))
    if(product){
        res.json(product)
    }else{
        res.status(404).json({error: 'Product not found'})
    }
})




app.listen(3001, () => {
    console.log('Server is running on port 3001')
})