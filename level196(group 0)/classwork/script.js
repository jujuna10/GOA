const express = require('express')
const app = express()


const accounts = [
    {id:1, name: 'John', age:20},
    {id:2, name: 'Maikle', age:22},    
    {id:3, name: 'Stiven', age:12},    
    {id:4, name: 'Jason', age:10},    
    {id:5, name: 'Leonard', age:20}

]

app.get('/accounts', (req, res) => {
    const { age } = req.query;
    if (age && isNaN(age)) {
        return res.status(400).send({ error: "Age must be a valid number" });
    }
    const filteredAccounts = age ? accounts.filter(account => account.age == parseInt(age)) : accounts;
    res.send(filteredAccounts);
});


const products = [
    {id:1, name: 'prodct1', price:20},
    {id:2, name: 'prodct2', price:10},
    {id:3, name: 'prodct3', price:100},
    {id:4, name: 'prodct4', price:50},
    {id:5, name: 'prodct5', price:80}
]

app.get('/products', (req, res) => {
    const {bool} = req.query
    if(bool === 'ascending'){
        const result = products.sort((a, b) => a.price - b.price)
        res.send(result)
    }else if(bool === 'descending'){
        const result = products.sort((a, b) => b.price - a.price)
        res.send(result)
    }
})



app.listen(3000,() => {
    console.log('Server is running on port 3000')
})