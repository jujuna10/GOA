import { useState } from 'react'

function App() {


  const [acc,setAcc] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const account = {
      name: event.target.elements.name.value,
      lastName: event.target.elements.lastname.value,
      age: event.target.elements.age.value,
      email: event.target.elements.email.value,
      places: event.target.elements.places.value

    }
    setAcc((prev) => [account,...prev])
  }

  console.log(acc)


  return (
    <div className='m-10'>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <input className="input-style" type="text" name="name" placeholder='name'/>
        <input className="input-style" type="text" name="lastname" placeholder='lastname'/>
        <input className="input-style" type="number" name="age" placeholder='age'/>
        <input className="input-style" type="email" name="email" placeholder='email'/>
        <input className="input-style" type="text" name="places" placeholder='places'/>
        <input type="submit" className='button' />
      </form>



      <div>
      {
        acc.map((data,index) => (
          <tr key={index}>
            <td className='border p-2'>{data.name}</td>
            <td className='border p-2'>{data.lastName}</td>
            <td className='border p-2'>{data.age}</td>
            <td className='border p-2'>{data.email}</td>
            <td className='border p-2'>{data.places}</td>

            
          </tr>
        ))}
      </div>
    </div>
  )
}

export default App
