import React from 'react'
import student from '../assets/student.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const pages = [
    {name:"student form",link:"/registre"},
    {name:"student item",link:"/item"},
    {name:"student list",link:"/list"}
  ]
  const login = [
    {name: "Log in", link: "/login"},
    {name: "Registre", link: "/registre"}
  ]
  return (
    <div className='flex justify-center mt-[20px]'>
      <div className='flex justify-between items-center w-[90%]'>
          <img src={student} alt="student" className='w-[50px] hover:cursor-pointer' />
          <div className='flex gap-[35px]'>
            {pages.map((item,index) => (
              <div key={index}>
                <Link to={item.link}><p className='hover:text-blue-700 hover:cursor-pointer hover:border-b-[1px] border-blue-700 p-[10px] duration-200'>{item.name}</p></Link>
              </div>
            ))}
          </div>

          <div className='flex gap-[20px]'>
            {login.map((item,index) => (
              <Link to={item.link}><button className='border-[1px] border-black rounded-[10px] p-[10px] w-[100px] shadow-md hover:cursor-pointer hover:bg-black hover:shadow-[inset_0_0_10px_white] hover:text-white duration-200'>{item.name}</button></Link>
            ))}
          </div>

      </div>
    </div>
  )
}
