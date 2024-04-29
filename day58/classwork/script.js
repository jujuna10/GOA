// const myInfo = {
//     name:"nika",
//     email:"jujunaniko@gmail.com",
//     age:17,
//     work:{
//         worktime:"8 hours",
//         money:1200
//     }
// }
// console.log(myInfo.name);
// console.log(myInfo.email);
// console.log(myInfo.age);
// myInfo.work.money = 2000;
// myInfo.work.worktime = "10 hours";
// console.log(myInfo.work.worktime);
// console.log(myInfo.work.money);




const color = document.getElementById("text");
const width = document.getElementById("width");
const height = document.getElementById("height");
const divElement = document.getElementById("div-block");
const btn = document.getElementById("submit")

function divChange(){
    
    const divColor = color.value;
    divElement.style.backgroundColor = divColor;

    const divWidth = width.value + "px";
    divElement.style.width = divWidth;

    const divHeght = height.value + "px";
    divElement.style.height = divHeght;

    
    
    
    
}



