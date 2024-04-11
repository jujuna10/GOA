// const p = document.getElementById("first");
// const p2 = document.getElementById("last");

// console.log(p)
// console.log(p2)



// const myInfo = {
//     name:"nika",
//     lastName:"zhuzhunadze",
//     age:17
// }

// const myFriend = {
//     name:"nika",
//     lastName:"gzirishvili",
//     age:17
// }



//  const p1 = document.getElementById("name1");
//  const p2 = document.getElementById("name2");

// function swapText(){
//     const tempValue = p1.textContent;
//     p1.textContent = p2.textContent;
//     p2.textContent = tempValue;
// }
// swapText()



// davaleba 1
// function add(number1,number2){
//     console.log(number1 + number2)
// }
// add(2,4)

// function multipay(number1,number2){
//     console.log(number1 * number2)
// }
// multipay(2,4)



// davaleba 2

// function greet(name1){
//     console.log("hello" + " " + name1)
// }
// greet("nika")


// davaleba 3

// function numbers(number1,number2,number3){
//     console.log((number1 + number2) * number3)
// }
// numbers(2,4,10)



// davaleba 4
// function even(number1){
//     if (number1 % 2 == 0){
//         console.log("this number is even")
//     }
//     else{
//         console.log("this number is odd")
//     }
// }
// even(7)




// davaleba 5

// function triangle(number1,number2,number3){
//     if (number1 + number2 > number3){
//         console.log("this is triangle")
//     }
//     else if (number2 + number3 > number1){
//         console.log("this is triangle")
//     }

//     else if (number1 + number3 > number2){
//         console.log("this is triangle")
//     }

//     else if (number1 + number3 < number2){
//         console.log("this is not triangle")
//     }
//     else if (number2 + number3 < number1){
//         console.log("this is triangle")
//     }
//     if (number1 + number2 < number3){
//         console.log("this is triangle")
//     }
// }
// triangle(10,20,10)



const car = {
    name:"mercedez benze",
    age:2024,
    start:function(){
        console.log("this is start")
    },
    break:function(){
        console.log("this is break")
    }

}
car.start();
car.break();



const myInfo = {
    name:"nika",
    lastName:"zhuzhunadze",
    fullName:function(namee,lastNamee){
        console.log(myInfo.name + " " + myInfo.lastName)
    }
}
myInfo.fullName(myInfo.name, myInfo.lastName)