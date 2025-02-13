'use client'
import React, { useState } from 'react'

function Page() {

    const [addProduct,setAddProduct] = useState(false)
    const [deleteProduct,setDeleteProduct] = useState(false)
    const [putProduct,setPutProduct] = useState(false)
    const [newProduct,setNewProduct] = useState({})

    const add = () => {
      setAddProduct(!addProduct)
    }

    const deleteChange = () => {
      setDeleteProduct(!deleteProduct)
    }

    const put = () => {
      setPutProduct(!putProduct)
    }

    const handleAdd = async (e) => {
      e.preventDefault()
      try{
          const response = await fetch('http://localhost:3002/products',{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newProduct)
          })
          if(!response.ok){
              throw new Error(`HTTP error! status: ${response.status}`)
          }
          console.log('Success')
      }catch(error){
          console.error('Error:', error)
      }
  }

  const handleDelte = async (e) => {
    e.preventDefault()
    try{
        const response = await fetch(`http://localhost:3002/products/${newProduct.id}`,{
            method: 'DELETE',
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        console.log('Success')
    }catch(error){
        console.error('Error:', error)
    }
}

const handlePut = async (e) => {
  e.preventDefault()
  try{
      const response = await fetch(`http://localhost:3002/products/${newProduct.id}`,{
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
      })
      if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`)
      }
      console.log('Success')
  }catch(error){
      console.error('Error:', error)
  }
}

    const handleChange = (e) => {
      const {name,value} = e.target
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }))
    }

  return (


    <div>
      <p onClick={add}>add</p>
      <p onClick={deleteChange}>delete</p>
      <p onClick={put}>put</p>

      {addProduct && (
        <div>
          <p>add product</p>
          <form onSubmit={handleAdd}>
            <input type="text" name="name" id="name" onChange={handleChange} className='border-[1px] border-black' />
            <input type="text" name="category" id="category" onChange={handleChange} className='border-[1px] border-black' />
            <input type="number" name="price" id="price" onChange={handleChange} className='border-[1px] border-black' />
            <input type="number" name="stock" id="stock" onChange={handleChange} className='border-[1px] border-black' />
            <button type='submit'>submit</button>
          </form>
        </div>
       
      )}

      {deleteProduct && (
        <div>
          <p>delete product</p>
          <form onSubmit={handleDelte}>
            <input type="number" name="id" id="id" onChange={handleChange} className='border-[1px] border-black' />
            <button type='submit'>submit</button>
          </form>
        </div>
      )}

      {putProduct && (
        <div>
          <p>put product</p>
          <form onSubmit={handlePut}>
            <input type="number" name="id" id="id" onChange={handleChange} className='border-[1px] border-black' />
            <input type="text" name="name" id="name" onChange={handleChange} className='border-[1px] border-black' />
            <input type="text" name="category" id="category" onChange={handleChange} className='border-[1px] border-black' />
            <input type="number" name="price" id="price" onChange={handleChange} className='border-[1px] border-black' />
            <input type="number" name="stock" id="stock" onChange={handleChange} className='border-[1px] border-black' />
            <button type='submit'>submit</button>
          </form>
        </div>
       
      )}


    </div>
  )
}

export default Page