import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import newsStore from './pages/Redux/storee.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <BrowserRouter>
    <Provider store={newsStore}>
    <App />
    </Provider>
 
    </BrowserRouter>
  </StrictMode>,
)
