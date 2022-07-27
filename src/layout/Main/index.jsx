import { Routes, Route } from 'react-router-dom'
import routes from '../../routes'

const Main = () => {
  return (
    <main>
      <Routes>
        {routes.map((p) => (
          <Route key={p.id} path={p.path} title={p.title} element={p.comp} />
        ))}
      </Routes>
    </main>
  )
}

export default Main
