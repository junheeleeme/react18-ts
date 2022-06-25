import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom' 
import { pages } from './pages'
import Header from "./Layout/Header"
import Main from "./Layout/Main"
import Footer from "./Layout/Footer"


export default function App() {

    const { pathname } = useLocation()
    const title = process.env.TITLE

    useEffect(()=> {
        const { title: subTitle } = pages.find(p => p.path === pathname )
        if(subTitle === 'Home') document.title = title
        else document.title = title + ' - ' + subTitle
    }, [pathname])

    return(
    <> 
        <Header />
        <Main>
            <Routes>
                { pages.map(p => <Route key={p.id} path={p.path} element={p.comp} /> ) }
            </Routes>
        </Main>
        <Footer/>
    </>
    )

}