
import { NavLink } from 'react-router-dom'
import { pages } from '../pages'

const Header = () => {

    return(
        <header className='header'>
            <h1 className="title">
            { 
                pages.map(p => <NavLink to={ p.path } key={ p.id }>{ p.title }</NavLink>)
            }    
            </h1>
        </header>
    )
}

export default Header