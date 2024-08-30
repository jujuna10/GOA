import { useState,useEffect } from 'react'
import './App.css'

const api = "https://fakestoreapi.com/products"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const respo = await fetch(api)
      const data = await respo.json()
      setData(data)
    }

    fetchData()
  }, [])

  console.log(data)
  return (
    <main>
      <h1>product</h1>
      {
          data?.map((item, index) => (
            <div className='main'>
              <div className='product'>
                <p key={index}>{item.title}</p>
                <p key={index}>{item.category}</p>
                <p key={index}>{item.description}</p>
                <img src={item.image} width={100} height={100}/>
                <p key={index}>{item.price}</p>

              </div>
            </div>

          ))  
      }

    </main>
  )

  
}

export default App
