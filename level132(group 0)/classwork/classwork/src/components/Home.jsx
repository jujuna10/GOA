import React, { useContext } from 'react'
import { dataContext } from './context/dataContext'

export default function Home() {

    const {acc} = useContext(dataContext)
    console.log(acc,'home')

  return (
    <div>
        <h1>Welcome to Home</h1>
    </div>
  )
}
