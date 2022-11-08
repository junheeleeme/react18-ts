import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = document.getElementById('App') as HTMLElement

ReactDom.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
