const express = require('express')
const app = express()
app.use(express.json()) 

const accounts = [

]

const posts = [

]

app.post('/register',(req,res) => {
    const {name,email,password} = req.body
    const existingUser = accounts.find(user => user.email === email)
    if (existingUser) {
        return res.status(400).json({ message: "Email already registered" })
    }

    const newUser = { name, email, password }
    accounts.push(newUser)

    res.json({ message: "Registration successful", accounts })

})

app.listen(3000,() => {
    console.log('running')
})