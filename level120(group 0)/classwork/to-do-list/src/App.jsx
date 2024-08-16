import { useState } from 'react'


function App() {
  const [names, setNames] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = e.target.name.value
    setNames([...names,newName])
    e.target.name.value = ""
  }

  const handleDelete = (index) => {
    setNames(names.filter((_, i) => i!== index));
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button>click</button>
      <ul>
  
          {
          names.map((name, index) => {
            return(
              <li key={index}>
                <span>{name}</span>
                <button type='button' onClick={() => handleDelete(index)}>remove</button>
              </li>

            )
          
          })}
        
      </ul>
    </form>
  )
    
}

export default App
