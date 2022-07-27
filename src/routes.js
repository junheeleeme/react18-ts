import loadable from '@loadable/component'

const Home = loadable(() => import('Pages/Home'), { fallback: <div>is Loading...</div> })
const Redux = loadable(() => import('Pages/Redux'), { fallback: <div>is Loading...</div> })
const Message = loadable(() => import('Pages/Message'), { fallback: <div>is Loading...</div> })
const HTTP = loadable(() => import('Pages/HTTP'), { fallback: <div>is Loading...</div> })

const routes = [
  { id: 0, path: '/', title: 'Home', comp: <Home /> },
  { id: 1, path: '/redux', title: 'Redux', comp: <Redux /> },
  { id: 2, path: '/message', title: 'message', comp: <Message /> },
  { id: 3, path: '/http', title: 'HTTP', comp: <HTTP /> },
]

export default routes
