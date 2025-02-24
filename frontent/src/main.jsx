import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './components/Context/StoreContext.jsx'
createRoot(document.getElementById('root')).render(
  //navigate between different views or pages
  <BrowserRouter> 
   <StoreContextProvider>
      
    <App />
    
   </StoreContextProvider>
   </BrowserRouter>
    
   
)
