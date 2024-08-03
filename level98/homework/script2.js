const p = document.getElementById("num")
const advice = document.getElementById("advice")
const btn = document.getElementById("button")


btn.addEventListener("click",function(){
    fetch("https://api.adviceslip.com/advice")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        p.textContent = "Advice #" + data.slip.id
        advice.textContent = '"' + data.slip.advice + '"'
    })
})
