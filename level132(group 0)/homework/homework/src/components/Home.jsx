import React, { useContext } from 'react'
import { dataContext } from '../context/dataContext'


export default function Home() {

    const {setColor} = useContext(dataContext)

    const handleClick = (e) => {
        e.preventDefault()
        const targe = e.target.checked ? "light" : "dark"
        setColor(targe)
    }
    

  return (
    <div>
        <input type="checkbox" name="box" onChange={handleClick} />
    </div>
  )
}
