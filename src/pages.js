import Home from "./Pages/Home"
import About from "./Pages/About"
import Notice from "./Pages/Notice"

export const pages = [
    { id: 0, path: '/', title: 'Home', comp: <Home/> },
    { id: 1, path: '/about', title: 'About', comp: <About/> },
    { id: 2, path: '/notice', title: 'Notice', comp: <Notice/> },
]