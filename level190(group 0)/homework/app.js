const express = require('express');
const path = require('path');
const app = express();

const products = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/pages/index.html'));
});

app.get('/products', (req, res) => {
    console.log('current products:', products);
    res.json(products);
});

app.post('/products', (req, res) => {
    console.log('request body:', req.body);
    const { name } = req.body;
    if (name) {
        products.push(name);
    }
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});