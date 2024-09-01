import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './component/Container'
import Presentational from './component/Presentational'

import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
    <Container />
  </div>
)
