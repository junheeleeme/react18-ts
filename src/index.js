import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import App from './App'
import './index.css'

const root = document.getElementById('macjjuni')

ReactDom.createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/">
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    ,
);