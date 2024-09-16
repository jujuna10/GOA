import React, { useState, useContext } from 'react'
import { dataContext } from './context/dataContext'



export default function Page1() {
  const [text, setText] = useState(false)
  const { textt } = useContext(dataContext)
  console.log(textt)

  const handleChange = (e) => {
    if(e.target.checked){
      setText(true)
    }
    else{
      setText(false)
    }
  };

  return (
    <div>
      {text ? <h1>{textt.eng}</h1> : <h1>{textt.geo}</h1>}
        
      <input type="checkbox" name="radio" onChange={handleChange} />
    </div>
  )
}
