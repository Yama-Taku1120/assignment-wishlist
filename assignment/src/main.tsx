import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './components/WishList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
