import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/Home'), {
  fallback: <div>is Loading...</div>,
})
const About = loadable(() => import('./pages/About'), {
  fallback: <div>is Loading...</div>,
})
const Notice = loadable(() => import('./pages/Notice'), {
  fallback: <div>is Loading...</div>,
})

const routes = [
  { id: 0, path: '/', title: 'Home', comp: <Home /> },
  { id: 1, path: '/about', title: 'About', comp: <About /> },
  { id: 2, path: '/notice', title: 'Notice', comp: <Notice /> },
]

export default routes
