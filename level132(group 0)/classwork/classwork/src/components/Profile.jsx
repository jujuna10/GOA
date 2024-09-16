import React, { useContext } from 'react'
import { dataContext } from './context/dataContext'

export default function Profile() {

    const {acc} = useContext(dataContext)
    console.log(acc,'profile')

  return (
    <div>
        <h1>Welcome to Profile</h1>
    </div>
  )
}
