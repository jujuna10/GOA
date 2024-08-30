import { useEffect } from 'react'
import { useState } from 'react'
import './index.css'


const api = " https://api.thenewsapi.com/v1/news/top?api_token=D9DJwPAdPoU1OHDiLQcnchn0DT0eOiKvO9gnB5zo&locale=us&limit=3"


const App = () => {


  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const respo = await fetch(api)
      const data = await respo.json()

      setData(data.data)
    }

    fetchData()
  },[])

  console.log(data)


  return(
    <main>
      <h1>News</h1>
      <hr />
      {
      
        data?.map((item, index) => (
          <article key={index} className='news'>
            <div className='title'>
              <a href={item.url}><h2>{item.title}</h2></a>
            </div>

            <div className='main'>
              <img src={item.image_url} alt={item.title} />

              <div className='text'>
                <p>{item.description}</p>
                <p>{item.snippet}</p>
                <a href={item.url}>See more</a>
              </div>
            </div>
            <hr />
          </article>
      ))}
    </main>
  )
  
}

export default App
