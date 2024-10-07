import { useState } from 'react'
import ErrorBoundary from './component/boundary/ErrorBoundary'
import Home from './component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  )
}

export default App
