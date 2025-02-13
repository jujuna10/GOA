'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Register() {

    const [login,setLogin] = useState({})
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3002/admin/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            console.log('Success')
            router.push('/adminpanel')
        }catch(error){
            console.error('Error:', error)
        }
    }



    const handleChange = (e) => {
        const {name,value} = e.target
        setLogin(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(login)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" className='border-[1px] border-black' onChange={handleChange} />
            <input type="password" name="password" id="password" className='border-[1px] border-black' onChange={handleChange} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register