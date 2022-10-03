import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './store/store'
import Client from './Client'
import './index.css'

const root = document.getElementById('App')

ReactDom.createRoot(root).render(
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Client />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
)
