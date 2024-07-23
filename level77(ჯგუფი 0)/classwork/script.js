const parent = document.getElementById("parent")
const img = document.getElementById("img")
const nextbtn = document.getElementById("next")
const previousbtn = document.getElementById("previous")

const photos = [
    "./beaute-nature_935395-1377.avif",
    "./camping-on-top-of-the-mountain-during-sunset-free-photo.webp",
    "./dawn-mountain_646135-1463.jpg",
    "./picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"
]

let index = 0

nextbtn.addEventListener("click",function(){
    index += 1
    if(index >= photos.length){
        index = 0
    }
    img.src = photos[index]

})


previousbtn.addEventListener("click",function(){
    index -= 1
    if(index <= 0){
        index = photos.length - 1
    }
    img.src = photos[index]

})