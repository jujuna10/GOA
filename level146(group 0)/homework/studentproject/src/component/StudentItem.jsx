import React, { useState } from 'react'
import { useContext } from 'react'
import { StudentContext } from './context/StudentContext'
import close from '../assets/close.png'
import editPhoto from '../assets/pencil.png'




export default function StudentItem() {
    const { student,setStudent } = useContext(StudentContext)
    const [sure,setSure] = useState({ show: false, index: null })
    const [edit,setEdit] = useState({ show: false, index: null })
    const [data, setData] = useState({ name: '', lastname: '', age: '' })




    const removeStudnet = (index) => {
        setSure({show:true,index})
    }

    const handleYes = () => {
        setStudent(prev => prev.filter((_,i) => i!== sure.index))
        setSure({show:false,index:null})
    }

    const handleNo = () => {
        setSure({show:false,index:null})
    }

    const editStudnet = (index) => {
        setEdit({ show: true, index })
        const studentToEdit = student[index]
        setData({ name: studentToEdit.name, lastname: studentToEdit.lastname, age: studentToEdit.age })
    }

    const editSubmit = (e) => {
        e.preventDefault()
        setStudent(prev => prev.map((stud, i) => 
            i === edit.index 
            ? { ...stud, name: e.target.name.value, lastname: e.target.lastname.value, age: e.target.age.value } 
            : stud
        ))
        setEdit({ show: false, index: null })
    }
    

    const editHandleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }


  return (
    <div className='flex justify-center w-[100%] p-[20px]'>
        <div className='grid grid-cols-4 w-[900px] gap-[10px]'>
            {student.map((item,index) => (
                <div key={index} className='bg-[rgb(228,215,215)] p-[20px] rounded-[10px] relative'>
                    <p className='hover:cursor-pointer'>{item.name}</p>
                    <p className='hover:cursor-pointer'>{item.lastname}</p>
                    <p className='hover:cursor-pointer'>{item.age}</p>
                    <div className='flex items-center gap-[10px] mt-[20px] hover:cursor-pointer'>
                        <img src={editPhoto} onClick={() => editStudnet(index)} alt="edit" className='w-[20px]' />
                        <p>edit</p>
                    </div>
                    <img src={close} onClick={() => removeStudnet(index)} alt="close" className='w-[20px] absolute top-[10px] left-[180px] hover:cursor-pointer' />
                </div>
            ))}
            {sure.show && (
                <div>
                    <p>are you sure that delete this student?</p>
                    <button className='hover:bg-black hover:text-white duration-200 rounded-[10px] w-[50px] border-[1px] border-gray-500' onClick={handleYes}>yes</button>
                    <button className='hover:bg-black hover:text-white duration-200 rounded-[10px] w-[50px] border-[1px] border-gray-500' onClick={handleNo}>no</button>
                </div>
            )}

            {edit.show && (
                <div>
                    <form onSubmit={editSubmit}>
                        <input type="text" name="name" onChange={(editHandleChange)} value={data.name}/>
                        <input type="text" name="lastname" onChange={(editHandleChange)} value={data.lastname}/>
                        <input type="number" name="age" onChange={(editHandleChange)} value={data.age}/>
                        <button type='submit'>submit</button>
                    </form>
                </div>
            )}
        </div>
    </div>
  )
}
