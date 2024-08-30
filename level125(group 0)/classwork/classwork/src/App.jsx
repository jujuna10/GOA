import { useState, useEffect } from 'react'

const api = "https://api.weatherapi.com/v1/current.json?key=14b5b6894ee44d0a9f8123810242908&q=London&aqi=no"

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
    <div className="App">
      <h1>weather in london</h1>
      {data.current && (
        <div>
          <h2>{data.location.name}, {data.location.country}</h2>
          <p>location: {data.location.country}</p>
          <p>location: {data.location.region}</p>

          <p>location: {data.location.localtime}</p>

          <p>temp: {data.current.temp_c}</p>
          <p>wind: {data.current.wind_kph}</p>

        </div>
      )}
    </div>
  )
}

export default App
