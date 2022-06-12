
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/Actions/actions'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'

const Header = () => {
    
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();

    return(
        <Box component='header'>
            <h1 className="title">
                <Link to="/">Crypto Prices</Link>
            </h1>
            <Switch checked={theme !== 'light' ? true : false} onClick={()=> dispatch(toggleTheme())}/>
        </Box>
    )
}

export default Header;