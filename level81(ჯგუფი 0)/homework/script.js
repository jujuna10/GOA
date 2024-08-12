
// 1. შექმენით map-ის კოპიო ფუნქცია სახელად manualMap

// const manualMap = function(arr,func){
//     const result = []
//     for(let i = 0; i < arr.length; i++){
//         result.push(func(arr[i],i))
//     }

//     return result
// }



// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newArr = manualMap(numbers,function(value){
//     return value * 2
// })

// console.log(newArr)

// 2. შექმენით filter-ის კოპიო ფუნქცია სახელად manualFilter

// function manualFilter(funcc,arr){
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(funcc(arr[i]) == true){
//             newArr.push(arr[i])

//         }
//     }

//     return newArr
// }

// const arr = [1,2,3,4,5,6,7,8,9,10]



// const result = manualFilter(function(value){
//     return value >= 4

// },arr)
// console.log(result)

// 3. თქვენ გადმოგეცემათ სახელების სია. დავალებაა, რომ დააბრუნოთ ახალი სია, სადაც ყველა სიტყვა იქნება capitalize ვარიანტში, გამოიყენეთ map.

// function capitalizeFirstLetter(str) {
   
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// }

// const names = ["giorgi","sandro","irakli","andro"]
// const capitalizeNames = names.map(function(value){
//     return capitalizeFirstLetter(value)
// })

// console.log(capitalizeNames)

// 4. თქვენ გადმოგეცემათ სახელების სია. დავალებაა, რომ დააბრუნოთ ახალი სია, სადაც გექნებათ მარტო ის სახელები, რომლებიც იწყებიან დიდი ასოთი და მათი სიგრძე არ აღემატება 5-ს.

// const names = ["giorgi","Sandro","irakli","Andro"]

// const newNames = names.filter(function(value){
//     if(value.length <= 5 && value.charAt(0) === value.charAt(0).toUpperCase()){
//         return value
//     }

// })

// console.log(newNames)




// 5. თქვენ გადმოგეცემათ მთელი რიცხვების სია. დავალებაა, რომ დააბრუნოთ ახალი სია, სადაც იქნება მარტო 20-ზე მეტი 5-ის ჯერადები.


// const numbers = [10,39,25,20,10,293,85,10,90,100]
// const newNumbers = numbers.filter(function(value){
//     if(value > 20 && value % 5 == 0){
//         return value
//     }
// })

// console.log(newNumbers)

