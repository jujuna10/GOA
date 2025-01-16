const express = require('express');
const app = express();


// cw 1
// const products = ['potato', 'cheese', 'tomato', 'juice']
// const users = ['user1', 'user2', 'user3', 'user4']

// app.get('/products', (req, res) => {
//     res.json(products)
// })

// app.get('/accounts', (req, res) => {
//     res.json(users)
// })


// cw 2
const products = [{id:1,name: 'potato'},{id:2,name: 'cheese'},{id:3,name: 'tomato'},{id:4,name: 'juice'}]
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const product = products.find(p => p.id === productId)
    if(product){
        res.json(product)
    }else{
        console.log('Product not found')
    }

})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})