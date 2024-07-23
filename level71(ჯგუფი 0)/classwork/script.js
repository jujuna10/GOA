const form = document.getElementById("form")
const parent = document.getElementById("parent")



form.addEventListener("submit",function(e){
    e.preventDefault()
    const pNode = document.createElement("p")
    const pNode2 = document.createElement("p")


    const pText = document.createTextNode(form.elements.name.value)
    const pText2 = document.createTextNode(form.elements.email.value)


    pNode.appendChild(pText)
    pNode2.appendChild(pText2)

    parent.appendChild(pNode)
    parent.appendChild(pNode2)
})