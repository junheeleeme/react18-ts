import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/Home'), {
  fallback: <div>is Loading...</div>,
})
const Message = loadable(() => import('./pages/Message'), {
  fallback: <div>is Loading...</div>,
})
const Menu2 = loadable(() => import('./pages/Menu2'), {
  fallback: <div>is Loading...</div>,
})

const routes = [
  { id: 0, path: '/', title: 'Home', comp: <Home /> },
  { id: 1, path: '/message', title: 'message', comp: <Message /> },
  { id: 2, path: '/menu2', title: 'Menu2', comp: <Menu2 /> },
]

export default routes
