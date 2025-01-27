const express = require('express');
const fs = require('fs').promises;
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(bodyParser.json());


app.get('/item/:id', async (req,res) => {
    const {id} = req.params

    try{
        const data = await fs.readFile('./data.json', 'utf8')
        const items = JSON.parse(data)

        const item = items.find(item => item.id === parseInt(id))
        if(!item){
            console.log('not found')
            return res.status(404).json('not found')
        }

        res.status(200).json(item)

    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Server error'})
        
    }
})

app.get('/item', async (req, res) => {
    try{
        const data = await fs.readFile('./data.json', 'utf8')
        const items = JSON.parse(data)

        if(!items){
            console.log('not found')
            return res.status(404).json('not found')
        }

        res.status(200).json(items)

    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Server error'})
        
    }
})

app.post('/items', async (req, res) => {
    const {name, price, category, stock} = req.body

    try{
        const data = await fs.readFile('./data.json', 'utf8')
        const items = JSON.parse(data)

        const newItem = {id: items.length + 1, name, price, category, stock}
        items.push(newItem)

        await fs.writeFile('./data.json', JSON.stringify(items, null, 2))
        res.status(201).json(newItem)
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Server error'})
    }
})


app.listen(3001,() => {
    console.log('Server is running on port 3001')
})