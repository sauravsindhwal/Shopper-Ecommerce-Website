import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextData from './Context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ShopContextData>
    <App />
    </ShopContextData>

  </StrictMode>,
)
