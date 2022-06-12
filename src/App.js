import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { indigo } from '@mui/material/colors'
import { Routes, Route } from 'react-router-dom' 
import { pages } from './pages'
import Box from '@mui/material/Box'
import Header from "./Layout/Header"
import Main from "./Layout/Main"
import Footer from "./Layout/Footer"



export default function App() {

    const mode = useSelector(state => state.theme)
    const theme = useMemo(() => 
        createTheme( 
            mode === 'light' ? 
            {
                palette: {
                    primary: {
                        main: '#1976d2',
                        bg: '#fff',
                        fc: '#000',
                    },
                    secondary: indigo,
                }
            }
        :
            {    
                palette: {
                    primary: {
                        main: '#1a237e',
                        bg: '#001e3c',
                        fc: '#e1e4e8',
                    },
                    secondary: {
                        main: '#0d47a1',
                    },
                }
            }
        ), [mode],
    );

    return(
    <ThemeProvider theme={theme}>
    <Box sx={{ backgroundColor: 'primary.bg', color: 'primary.fc'}}>
        <Header />
            <Main>
                <Routes>
                    { pages.map(p => <Route key={p.id} path={p.path} element={p.comp} /> ) }
                </Routes>
            </Main>
        <Footer/>
    </Box>
    </ThemeProvider>

)

}