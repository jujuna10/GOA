import React, { useContext } from 'react'
import { dataContext } from './context/dataContext'

export default function About() {

    const {acc} = useContext(dataContext)
    console.log(acc,'about')

  return (
    <div>
        <h1>Welcome to About</h1>
    </div>
  )
}
