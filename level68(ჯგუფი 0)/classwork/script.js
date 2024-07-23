// const p = document.getElementById("p2")
// const elements = document.getElementsByClassName("pp")
// const elements2 = document.getElementsByTagName("p")
// console.log(p)
// console.log(elements)
// console.log(elements2)




const btn = document.getElementById("btn")
const div = document.getElementById("div")


div.style.flexDirection = "row"

btn.addEventListener("click",function(){
    const display = div.style.flexDirection
    if(display == "row"){
        div.style.flexDirection = "column"

    }else{
        div.style.flexDirection = "row"

    }
})


// const p = document.getElementById("p")

// const div = p.parentElement


// btn.addEventListener("click",function(){
//     div.style.backgroundColor = "yellow"
// })



// const div = document.getElementById("div")

// console.log(div.childElementCount)
// console.log(div.previousSibling)
// console.log(div.childNodes)
// console.log(div.nextSibling)


// const p = document.getElementsByClassName("p")
// for(let i = 0; i < p.length; i++){
//     p[i].innerHTML = "hello"
// }

