import { useState } from 'react'
import Profile from './components/Profile'
import { dataContext } from './components/context/DataContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <dataContext.Provider value='blue'>
        <Profile />
      </dataContext.Provider>

      <dataContext.Provider value='yellow'>
        <Profile />
      </dataContext.Provider>
    </>
  )
}

export default App
