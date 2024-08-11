const p = document.getElementById("p")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

let value = 0

btn1.addEventListener("click",() => {
    value++
    p.textContent = `count ${value}`
})

btn2.addEventListener("click",() => {
    value--
    p.textContent = `count ${value}`
})




// 3) შეადარეთ იმპერიული და დეკლარაციული კოდები (აღწერეთ კომენტარებით)
// იმპერატიულ კოდებს ჩვენ დეტალურად ვეუბენბით თუ რა როგორ უნდა გააკეთოს ხოლო დეკლარაციულს ვეუბნებით იმას მხოლოდ თუ რა უნდა გააკეთოს
