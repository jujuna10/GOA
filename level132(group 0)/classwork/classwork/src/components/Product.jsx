import React, { useContext } from 'react'
import { dataContext } from './context/dataContext'

export default function Product() {

    const {acc} = useContext(dataContext)
    console.log(acc,'product')

  return (
    <div>
        <h1>Welcome to Product</h1>
    </div>
  )
}
