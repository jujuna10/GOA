const child = document.getElementById("child");

let x = 0;
let y = 0;

function position(){
    if((x <= 450 && y <= 450) && (x >= 0 && y >= 0)){
        child.style.transform = `translate(${x}px,${y}px)`
    }
}


window.addEventListener("keydown",function(e){
    switch (e.key){
        case "ArrowUp":
            y -= 10
            break
        case "ArrowDown":
            y += 10
            break
        case "ArrowLeft":
            x -= 10
            break
        case "ArrowRight":
            x += 10
            break
    }
    position()

})

