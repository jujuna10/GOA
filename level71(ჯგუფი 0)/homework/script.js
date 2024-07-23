const form = document.getElementById("form")
const parent = document.getElementById("parent")


const addChild = function(text){
    const pNode = document.createElement("p")
    const pText = document.createTextNode(text)

    const btn = document.createElement("button")
    const btnText = document.createTextNode("edit");

    pNode.appendChild(pText)
    parent.appendChild(pNode)

    if(text.length > 0){
        btn.appendChild(btnText)
        parent.appendChild(btn)

    }


    pNode.addEventListener("click",function(){
        parent.removeChild(pNode)
        parent.removeChild(btn)
        
    })

    btn.addEventListener("click",function(e){
    e.preventDefault()
    const textChange = form.elements.change.value
    if(textChange.length > 0){

        pNode.textContent = textChange
    }

    })
}


form.addEventListener("submit",function(e){
    e.preventDefault()

    const input = form.elements.text
    const change = form.elements.change
    addChild(input.value)

    input.value = ""
    change.value = ""
})