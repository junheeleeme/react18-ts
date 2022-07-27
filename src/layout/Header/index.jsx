import { NavLink, Link } from 'react-router-dom'
import routes from '../../routes'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <h1 className="title">
        {routes.map((p) => (
          <NavLink to={p.path} key={p.id}>
            {p.title}
          </NavLink>
        ))}
      </h1>
    </header>
  )
}

export default Header
