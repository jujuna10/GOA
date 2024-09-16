import React, { useContext } from 'react'
import { dataContext } from './context/dataContext'

export default function Price() {

    const {acc} = useContext(dataContext)
    console.log(acc,'price')

  return (
    <div>
        <h1>Welcome to Price</h1>
    </div>
  )
}
