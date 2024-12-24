import { useState,useEffect } from 'react'


function App() {
  const [product, setProduct] = useState([])

  const click = async (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProduct(data))
  }
  console.log(product)

 

  return (
    <div>
        <button onClick={click}>add</button>
        {
          product.map((item,index) => (
            <li key={index}>
              {item.name} - ${item.price}
              </li>
          ))
        }
    </div>
  )
}

export default App
