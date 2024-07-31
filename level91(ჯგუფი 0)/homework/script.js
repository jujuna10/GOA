// 1. Create an object person, with properties: name and age. Use Object.assign to create a new object employee with additional property - position.
// const person = {
//     name:"dokdok",
//     age:10
// }
// const newPerson = Object.assign({},person,{position:"buissmens"})
// console.log(newPerson)

// 2. Merge two objects obj1 and obj2 into a new object using Object.assign.
// const person = {
//     name:"dokdok",
//     age:10
// }

// const person2 = {
//     lastName:"skoskos",
//     position:"buismenss"
// }

// const persons = Object.assign({},person,person2)
// console.log(persons)

// 3. Copy properties from multiple source objects into a single target object using Object.assign.
// const person = {
//     name:"dokdok",
//     age:10
// }
// const moreInfo = {
//     lastName:"skoskos",
//     position:"buismenss"
// }
// const info = {
//     country:"america",
//     city:"new-york"
// }
// const contact = {
//     tel:3939303,
//     gmail:"kofkofok@gmail.com"
// }

// const personInfo = Object.assign({},person,moreInfo,info,contact)
// console.log(personInfo)


// 4. Use Object.assign to clone an object original.
// const person = {
//     name:"dokdok",
//     age:10
// }
// const newPerson = Object.assign({},person)
// console.log(newPerson)

// 5. Merge properties of an object source into another object target using Object.assign.
// const person = {
//     name:"skosk",
//     age:12
// }

// const person2 = {
//     lastName:"kdodkod",
//     position:"student"
// }

// const info = Object.assign({},person,person2)
// console.log(info)

// 6. Merge arrays of objects into a single object using Object.assign.
// const bmwCar = {
//     car:"bmw",
//     year:2010
// }
// const mercedesCar = {
//     car1:"mercedes",
//     year1:2019
// }
// const toyotaCar = {
//     car2:"toyota",
//     year2:2017
// }
// const audiCar = {
//     car3:"audi",
//     year3:2015
// }

// const allCar = Object.assign({},bmwCar,mercedesCar,toyotaCar,audiCar)
// console.log(allCar)


// 7. Use Object.assign to update properties of an existing object with new values.
// const person = {
//     name:"dokdok",
//     age:10
// }

// const arr = ["dkdokdokd",12]

// const newPerson = Object.assign({}, {newName:arr[0],newAge:arr[1]})
// console.log(newPerson)
// 8. Implement a function extend that takes two objects and merges their properties using Object.assign.
// const car = {
//     car:"bmw",
//     year:2020
// }
// const moreInfo = {
//     color:"black",
//     model:"M5"
// }

// const fullInfo = Object.assign({},car,moreInfo)
// console.log(fullInfo)

// 9. Manually create a function named manualAssign in JavaScript utilizing the for...of loop, define parameters for target and ...sources, 
// loop through each source object, iterate over keys within each source, and assign corresponding values to the target object.

// const person = {
//     name:"odokdokd",
//     age:10,
//     status:"student",
//     country:"america"
// }

// const manualAssign = (changeObj,...objArr) => {
//     objArr.forEach((copyObj) => {
//         for(let i in copyObj){
//             changeObj[i] = copyObj[i]
//         }

//     })
//     return changeObj
// }

// const result = manualAssign({},person)
// console.log(result)



// 1. Array Destructuring: Employ the rest operator to capture multiple elements of an array into a single variable.
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const [...rest] = arr
// console.log(rest)

// 2. Collecting Function Arguments: Gather all remaining arguments into an array within a function.
// const arr = [1,2,3,4,5,6,7,8,9,10]
// function numbersArr(arr) {
//     const [first,second, ...rest] = arr
//     console.log(rest)
// }
// numbersArr(arr)

// 3. Function Parameters: Use the rest parameter syntax (...args) within a function's parameter list to represent an indefinite number of arguments as an array.
// function indefiniteNumber(...args){
//     return args.reduce((preValue,curValue) => preValue + curValue,0)
// }
// console.log(indefiniteNumber(1,2,3,4,5,6,7,8,9,10))
// 4. Forwarding Arguments: Capture all arguments passed to a function and forward them dynamically to another function using the rest parameter.
// function allArguments(...args){
//     console.log(...args)
// }

// function forward(...args){
//     allArguments(...args)
// }
// forward(1,2,3,4,5)

// 5. Object Destructuring: Utilize the rest operator in object destructuring to gather any remaining properties into a new object.

// const person = {
//     name:"dkodok",
//     age:10,
//     status:"student",
//     country:"spain"
// }

// const {name,age,...rest} = person
// console.log(rest)



// 1. Array Concatenation: Combine multiple arrays into a single array using the spread operator.
// const numbers = [1,2,3,4,5]
// const numbers2 = [6,7,8,9,10]
// console.log([...numbers, ...numbers2])

// 2. Object Merging: Merge properties from multiple objects into a new object using the spread operator.
// const person = {
//     name:"dkdoodk",
//     age:12,
//     status:"buissmens",
//     country:"spain"
// }

// const person2 = {
//     name:"dkodok",
//     age:10,
//     status:"student",
//     country:"spain"
// }

// const combine = {...person,...person2}
// console.log(combine)

// 3. Array Modification: Add new elements to an array or modify existing elements using the spread operator.
// const numbers = [1,2,3,4,5]
// console.log(...numbers,10)


// 4. Copying Arrays: Create a copy of an array using the spread operator.
// const numbers = [1,2,3,4,5]
// const copyArr = [...numbers]
// console.log(copyArr)

// 5. String to Array Conversion: Convert a string into an array of characters using the spread operator.
// const string = "kodokskoso"
// const stringArr = [...string]
// console.log(stringArr)



// 1. Array Destructuring: Extract values from an array and assign them to variables in a single line of code.
// const numbers = [1,2,3,4,5]
// const destruting = [first,second, ...rest] = numbers
// console.log(first)
// console.log(second)
// console.log(rest)

// 2. Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.
// const person = {
//     name:"dkdoodk",
//     age:12,
//     status:"buissmens",
//     country:"spain"
// }

// const destruting = {name:one,age:two,status:three,country:four} = person
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)


// 3. Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.

// const person = {
//     name:"dkdoodk",
//     age:12,
//     status:"buissmens",
//     country:"spain"
// }

// const destruting = {name:userName,age:userAge,status:userStatus,country:userCountry} = person
// console.log(userName)
// console.log(userAge)
// console.log(userStatus)
// console.log(userCountry)

// 4. Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.
// const numbers = [1,2,3,4,5]
// const destructing = [, , three,four] = numbers
// console.log(three)
// console.log(four)



// 5. Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.
// const people = [
//         {name:"dkdoodk",
//         age:12,
//         },
//         {name:"dkookdko",
//         age:10
//         }
// ]
// for(let {name,age} of people){
//     console.log(`${name},${age}`)
// }

// 6. Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.
// const numbers = [1,2,3,4,5]
// const destructing = [first,second,...rest] = numbers
// console.log(rest)


// 7. Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.
// const numbers = [1,2,3,4,5]
// const destructing = [one,,,,five] = numbers
// console.log(one,five)


// 8. Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses destructuring to access object properties within the filter function.
// function filterByCondition(obj,condition){
//     return obj.filter(({age}) => {
//         return condition(age)
//     })
// }

// const people = [
//         {name:"dkdoodk",
//         age:12,
//         },
//         {name:"dkookdko",
//         age:10
//         },
//         {name:"dkdosok",
//         age: 15
//         },
//         {name:"oksoksok",
//         age:8
//         }
// ]

// const condi = (age) => age >= 12
// const filterData = filterByCondition(people,condi)
// console.log(filterData)

// 9. Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects, extract properties from the objects using destructuring.
// const arr = [
//         {name:"dkdoodk",
//         age:12,
//         },
//         10,
//         {name:"dkookdko",
//         age:10
//         },
//         20,
//         {name:"dkdosok",
//         age: 15
//         },
//         {name:"oksoksok",
//         age:8
//         }
// ]

// function filterByCondition(obj,condition){
//     return obj.filter(value =>{
//         if(typeof value == "object" && value != null){
//             const {name,age} = value
//             return condition(age,name)
//         }
//     })
// }

// const condi = (age,name) => age > 0 && name != ""
// const filterData = filterByCondition(arr,condi)
// console.log(filterData)


  