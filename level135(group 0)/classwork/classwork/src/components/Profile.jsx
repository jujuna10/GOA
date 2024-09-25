import React, { useContext } from 'react'
import { dataContext } from './context/DataContext'

export default function Profile() {
 
    const value = useContext(dataContext)
    

  return (
    <div style={{backgroundColor:value}}>
        <p>nika</p>
        <p>zhuzhunadze</p>
        <p>jujunaniko@gmail.com</p>
        <p>password</p>
    </div>
  )
}
