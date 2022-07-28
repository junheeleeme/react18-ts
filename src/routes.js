import loadable from '@loadable/component'

// 코드 스플리팅
const Loading = <div>is Loading</div>
const Home = loadable(() => import('pages/Home'), { fallback: Loading })
const Redux = loadable(() => import('pages/Redux'), { fallback: Loading })
const Message = loadable(() => import('pages/Message'), { fallback: Loading })
const DialogPage = loadable(() => import('pages/DialogPage'), { fallback: Loading })
const HTTP = loadable(() => import('pages/HTTP'), { fallback: Loading })
const Toast = loadable(() => import('pages/ToastPage'), { fallback: Loading })

const routes = [
  { id: 0, path: '/', title: 'Home', comp: <Home /> },
  { id: 1, path: '/redux', title: 'Redux', comp: <Redux /> },
  { id: 2, path: '/message', title: 'Message', comp: <Message /> },
  { id: 3, path: '/dialog', title: 'Dialog', comp: <DialogPage /> },
  { id: 4, path: '/http', title: 'HTTP', comp: <HTTP /> },
  { id: 5, path: '/toast', title: 'Toast', comp: <Toast /> },
]

export default routes
