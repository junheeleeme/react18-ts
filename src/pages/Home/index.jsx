import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/Actions/actions'

const Home = () => {
  // use Redux
  const { theme } = useSelector((store) => store)
  const dispatch = useDispatch()

  const clickToggle = useCallback(() => {
    dispatch(toggleTheme())
  }, [])

  return (
    <section>
      <h2>Redux</h2>
      <h3>Theme : {theme}</h3>
      <button onClick={clickToggle}>Toggle</button>
    </section>
  )
}

export default Home
