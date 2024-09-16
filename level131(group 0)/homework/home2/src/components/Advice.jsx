import React, { useState, useEffect } from 'react'

export default function Advice() {
    
    const [data,setData] = useState(null)

    const api = "https://api.adviceslip.com/advice"

    useEffect(() => {
        const fetchData = async () => {
          const respo = await fetch(api)
          const data = await respo.json()
          setData(data)
        }
    
        fetchData()
      }, [])


  return (
    <div>
        <div>
            {data ? <p>{data.slip.id} {data.slip.advice}</p> : <p>Loading...</p>}
        </div>
    </div>
  )
}
