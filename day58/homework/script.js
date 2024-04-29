// davaleba 1


// const myInfo = {
//     name: "nika",
//     lastName: "zhuzhunadze",
//     programming:{
//         python: "yes",
//         css: "yes",
//         html: "no"
//     },
//     database:{
//         mysql: "no"
//     }

// }
// myInfo.programming.html = "yes";
// console.log(myInfo.programming.html);
// myInfo.database.mysql = "yes";
// console.log(myInfo.database.mysql)



// davaleba 2

const widthh = document.getElementById("width");
const heightt = document.getElementById("height");
const colorr = document.getElementById("color");
const text2 = document.getElementById("textt");
const p = document.getElementById("paragraph");
const div = document.getElementById("div-block");
const btn = document.getElementById("butt")
function divBlockk(){
    p.textContent = text2.value;
    div.style.width = widthh.value + "px";
    div.style.height = heightt.value + "px";
    div.style.backgroundColor = colorr.value;

};
divBlockk()