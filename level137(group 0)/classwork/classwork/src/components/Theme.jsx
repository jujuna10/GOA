import React, { useContext } from 'react'
import { ThemeContext } from './context/DataContext2'

export default function Theme() {

    const theme = useContext(ThemeContext)
  
  return (

    <div style={{backgroundColor:theme}}>
        <p>hello</p>
    </div>
  )
}
