import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StudentContext } from './context/StudentContext'


export default function StudentForm() {
    const { student,setStudent } = useContext(StudentContext)
    const [data,setData] = useState({name:'',lastname:'',age:''})

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStudent([...student,data])
        setData({name:'',lastname:'',age:''})
    }
  return (

    <div className='flex justify-center items-center w-[100%] h-[100vh]'>
        <div className='flex flex-col gap-[50px] justify-center items-center border-[1px] border-black rounded-[10px] p-[100px]'>
            <h1>Registration</h1>
            <form className='flex flex-col gap-[50px]' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' className='w-[500px] border-[1px] border-blue-700 p-[10px] rounded-[10px]' onChange={handleChange} />
                <input type="text" name="lastname" placeholder='Lastname' className='w-[500px] border-[1px] border-blue-700 p-[10px] rounded-[10px]' onChange={handleChange} />
                <input type="number" name="age" placeholder='Age' className='w-[500px] border-[1px] border-blue-700 p-[10px] rounded-[10px]' onChange={handleChange} />
                <button type='submit' className='w-[500px] border-[1px] border-black p-[10px] rounded-[10px] hover:bg-[rgb(36,34,34)] hover:text-white duration-200 shadow-md hover:shadow-[inset_0_0_10px_white]'>Submit</button>
            </form>
            <Link to='/login'><p className='text-blue-700 hover:cursor-pointer'>Log in</p></Link>
        </div>
    </div>
  )
}
