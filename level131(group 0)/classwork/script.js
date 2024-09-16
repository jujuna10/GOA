const ul = document.getElementById("nav")
const main = document.querySelector("main")

const home = `
    <div>
        <h1>home</h1>
    </div>
`

const about = `
    <div>
        <h1>about</h1>
    </div>
`

ul.addEventListener("click",(event) => {
    const page = event.target.textContent
    if(page === "home"){
        main.innerHTML = home
    }else{
        main.innerHTML = about

    }
})

