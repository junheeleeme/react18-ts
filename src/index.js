import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('macjjuni')

ReactDom.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);