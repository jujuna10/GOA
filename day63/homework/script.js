// დავალება 1
// let num1 = Number(prompt("please enter number:"))
// let num2 = Number(prompt("please enter number"))
// console.log(num1 + num2)

// დავალება 2
// let name = prompt("please enter your name:")
// let lastname = prompt("please enter your lastname:")
// alert("welcome" + " " + name + " " + lastname)

// დავალება 3
// function sumFunction(start,end){
//     let sum = 0
//     for(let i = start; i < end; i += 1){
//         sum += i
//     }
//     console.log(sum)
// }
// console.log(sumFunction(0,10))

// დავალება 4
function sumFunction(start,end){
    let sum = 0
    for(let i = start; i < end; i += 1){
        if (i % 2 == 0){
            sum += i
        }
       
    }
    console.log(sum)
}
console.log(sumFunction(0,10))

