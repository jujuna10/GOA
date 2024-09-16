import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Button({button}) {

    const navigate = useNavigate()
    const handleClick = () => {
        button(false)
        navigate('/advice')
        
    }

  return (

    
        <div>
            <p>click button for advice</p>
            <button onClick={handleClick}>Click</button>
        
        </div> 
    
    

   
  )
}
