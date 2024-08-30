import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clean from './Clean.jsx'

createRoot(document.getElementById('root')).render(
    <div>
      {/* <App /> */}
      <Clean />
    </div>
)
