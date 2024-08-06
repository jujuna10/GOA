const productContainer = document.getElementById("products")

// fetch("https://fakestoreapi.com/products/category/jewelery")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             for(let i of data){
//                 const html = `
//                     <div id="${i.id}" class="product">
//                         <p id="title">${i.title}</p>
//                         <img id="product-img" src="${i.image}">
//                         <p id="price">${i.price}</p>
//                     </div>                
//                 `
//                 productContainer.insertAdjacentHTML("afterbegin",html)
//             }
//         })



const jeweleryData = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products/category/jewelery")
        const data = await res.json()
        for(let i of data){
            const html = `
                <div id="${i.id}" class="product">
                    <p id="title">${i.title}</p>
                    <img id="product-img" src="${i.image}">
                    <p id="price">${i.price}</p>
                </div>                
            `
            productContainer.insertAdjacentHTML("afterbegin",html)
            }
    }
    catch(err){
        console.log(err)
    }
}
jeweleryData()