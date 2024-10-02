import { useState } from 'react'
import Home from './components/Home'
import ErrorBoundary from './components/ErrorBoundery'

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
