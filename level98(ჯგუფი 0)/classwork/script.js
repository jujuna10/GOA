const p = document.getElementById("p")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")

fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
        p.textContent = data.title
        p2.textContent = data.userId
        p3.textContent = data.id
        p4.textContent = data.completed


    })
    .catch((err) => {
        console.log('Reject reason:', err);
    })
    .finally(() => {
        console.log("Process end")
    });