import loadable from '@loadable/component'

// 코드 스플리팅
const Loading = <div>is Loading</div>
const Home = loadable(() => import('Pages/Home'), { fallback: Loading })
const Redux = loadable(() => import('Pages/Redux'), { fallback: Loading })
const Message = loadable(() => import('Pages/Message'), { fallback: Loading })
const Confirm = loadable(() => import('Pages/Confirm'), { fallback: Loading })
const HTTP = loadable(() => import('Pages/HTTP'), { fallback: Loading })

const routes = [
  { id: 0, path: '/', title: 'Home', comp: <Home /> },
  { id: 1, path: '/redux', title: 'Redux', comp: <Redux /> },
  { id: 2, path: '/message', title: 'Message', comp: <Message /> },
  { id: 3, path: '/confirm', title: 'Confirm', comp: <Confirm /> },
  { id: 4, path: '/http', title: 'HTTP', comp: <HTTP /> },
]

export default routes
