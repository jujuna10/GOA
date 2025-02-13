'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Register() {

    const [account,setAccount] = useState({})
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3002/admin/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            console.log('Success')
        }catch(error){
            console.error('Error:', error)
        }
    }

    const login = () => {
        router.push('/login')
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setAccount(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(account)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" className='border-[1px] border-black' onChange={handleChange} />
            <input type="password" name="password" id="password" className='border-[1px] border-black' onChange={handleChange} />
            <button type='submit'>submit</button>
        </form>
        <p onClick={login} className='hover:cursor-pointer'>login</p>
    </div>
  )
}

export default Register