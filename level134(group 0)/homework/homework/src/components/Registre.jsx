import React from 'react'
import useFormData from '../hooks/useFormData.jsx';

export default function Registre() {

    const [formData,handleChange,handleSubmit] = useFormData()

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" onChange={handleChange}/>
            <input type="email" name="email" onChange={handleChange}/>
            <input type="password" name="password" onChange={handleChange}/>
            <button type='submit'>submit</button>

        </form>
    </div>
  )
}
