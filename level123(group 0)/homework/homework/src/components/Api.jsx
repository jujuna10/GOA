import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Api() {

    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1")
                const jsonData = await resp.json()
                setData(jsonData)
                console.log(jsonData)
            }
            catch(error) {
                console.log(error)
            }
        }

        fetchData()
    },[])

  return (
    <div>
        
    </div>
  )
}
