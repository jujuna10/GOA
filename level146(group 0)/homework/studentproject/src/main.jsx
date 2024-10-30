import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StudentProvider } from './component/context/StudentContext.jsx'

createRoot(document.getElementById('root')).render(
    <StudentProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>   
    </StudentProvider>
)
