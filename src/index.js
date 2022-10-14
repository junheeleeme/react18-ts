import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './store/store'
import App from './App'
import './index.css'

const root = document.getElementById('App')

ReactDom.createRoot(root).render(
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
)
