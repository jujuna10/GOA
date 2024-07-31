// 1. Define a class called Person with properties like name, age, and gender.
// class Person{
//     constructor(name,lastname,age){
//         this.name = name
//         this.lastname = lastname
//         this.age = age
//     }
// }

// const person1 = new Person("kokoodk","dkoodkod",10)
// console.log(person1)

// 2. Create an object, using the Person class and assign it to a variable.
// class Person{
//     constructor(name,lastname,){
//         this.name = name
//         this.lastname = lastname
//     }
// }

// const first = new Person("sosks","skosok")
// console.log(first)

// 3. Add methods to the Person class such as greet() to log a greeting.

// class Person{
//     constructor(name,lastname){
//         this.name = name
//         this.lastname = lastname

        
//     }
//     greet(){
//         console.log(`hello ${this.name} ${this.lastname}`)
//     }
// }

// const person1 = new Person("kokoodk","dkoodkod")
// person1.greet()

// 4. Access and log the properties of an object created in task2.
// class Person{
//     constructor(name,lastname,){
//         this.name = name
//         this.lastname = lastname
//     }
// }

// const first = new Person("sosks","skosok")
// console.log(first.name,first.lastname)

// 5. Update the values of class properties in a new object.
// class Person{
//     constructor(name,lastname,){
//         this.name = name
//         this.lastname = lastname
//     }
//     set nameChange(newName){
//         this.name = newName
//     }
// }

// const first = new Person("sosks","skosok")
// first.nameChange = "dijdko"
// console.log(first.name,first.lastname)

// 6. Create multiple objects, using the Person class and assign them to variables.
// class Person{
//     constructor(name,lastname,age){
//         this.name = name
//         this.lastname = lastname
//         this.age = age
//     }
// }

// const person1 = new Person("kokoodk","dkoodkod",10)
// const person2 = new Person("koko","dijdj",9)
// const person3 = new Person("djiidj","dijsij",12)
// const person4 = new Person("jikdood","sijdijd",8)
// const person5 = new Person("djidji","djidj",15)
// const person6 = new Person("djidji","djidosk",7)
// const person7 = new Person("djdjid","djisko",14)
// console.log(person1,person2,person3,person4,person5,person6,person6)


// 7. Define a getter method in a class that returns a specific property value.
// class Person{
//     #name
//     constructor(name,lastname,age){
//         this.#name = name
//         this.lastname = lastname
//         this.age = age
//     }
//     get name(){
//         return this.#name
//     }
// }

// const person1 = new Person("kokoodk","dkoodkod",10)
// console.log(person1.name)



// 8. Use a getter method to create a computed property that generates its value based on certain conditions or calculations.
// პირობა ვერ გავიგე
// 9. Define a setter method in a class that sets the value of a specific property.
// class Person{
//     constructor(name,lastname,age){
//         this.name = name
//         this.lastname = lastname
//         this.age = age
//     }
//     set lastName(newLastName){
//         this.name = newLastName
//     }

// }

// const person1 = new Person("kokoodk","dkoodkod",10)
// person1.lastname = "disoks"
// console.log(person1)
// 10. Define a private property inside a class using the # prefix.
class Person{
    #password
    constructor(name,lastname,age,password){
        this.name = name
        this.lastname = lastname
        this.age = age
        this.#password = password
    }
    get password(){
        return this.#password
    }
}

const person1 = new Person("kokoodk","dkoodkod",10,1234)
console.log(person1.password)