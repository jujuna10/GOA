import React from 'react'

export default function Presentational({onSubmit,acc,setAcc,effect}) {


    const submitted = (event) => {
        event.preventDefault()
        const account = {
        name: event.target.elements.name.value,
        lastName: event.target.elements.lastname.value,
        age: event.target.elements.age.value,
        email: event.target.elements.email.value,
        places: event.target.elements.places.value

        
        }

        onSubmit(account)
    }




  return (
    <div className='m-10'>
      <form className='flex flex-col gap-5' onSubmit={submitted}>
        <input className="input-style" type="text" name="name" placeholder='name'/>
        <input className="input-style" type="text" name="lastname" placeholder='lastname'/>
        <input className="input-style" type="number" name="age" placeholder='age'/>
        <input className="input-style" type="email" name="email" placeholder='email'/>
        <input className="input-style" type="text" name="places" placeholder='places'/>
        <input type="submit" className='button' />
      </form>

      <p>{effect.name}</p>
      <p>{effect.lastName}</p>
      <p>{effect.age}</p>
      <p>{effect.email}</p>
      <p>{effect.places}</p>

      
    </div>
  )
}
