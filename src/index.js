import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from './store/store'
import Client from './Client'
import './styles/style.css'
import 'react-toastify/dist/ReactToastify.css'

const root = document.getElementById('App')

ReactDom.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Client />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
)
