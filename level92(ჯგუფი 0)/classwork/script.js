let name = document.getElementById("name")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let btn = document.getElementById("btn")

let email2 = document.getElementById("email2")
let password2 = document.getElementById("password2")
let btn2 = document.getElementById("btn2")


let dataBase = []

class Account{
    #password;
    constructor(name,lastname,email,password){
        this.name = name;
        this.lastname = lastname;
        this.email = email
        this.#password = password
    }
    
    get password(){
        return this.#password;
    }
}


 
btn.addEventListener("click",function(e){
    e.preventDefault()

    
    
    dataBase.push(new Account(name.value,lastname.value,email.value,password.value))
    console.log(dataBase)
})

btn2.addEventListener("click",function(e){
    e.preventDefault()
    const account = dataBase.find(function(obj){
        return obj.email.value === email2.value
    })
    if(account && account.password === password2.name){
        console.log("yes")
    }
    else{
        console.log("no")

    }
})
