import React, { useContext } from 'react'
import { dataContext } from './context/dataContext.jsx'


export default function Form() {

    const { acc, setAcc } = useContext(dataContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAcc(prevAcc => ({
            ...prevAcc,
            [name]: value
        }))
    }

  return (
    <div>
        <input type="name" name="name" value={acc.name} onChange={handleChange} />
        <input type="email" name="email" value={acc.email} onChange={handleChange} />
    </div>
  )
}
