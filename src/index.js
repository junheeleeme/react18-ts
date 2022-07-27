import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Client from './Client'
import './styles/style.css'

const root = document.getElementById('App')

ReactDom.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Client />
    </BrowserRouter>
  </Provider>
)
