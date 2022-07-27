import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import message from '../../utils/message'

const Home = () => {
  // use Redux
  const { theme } = useSelector((store) => store)
  // const dispatch = useDispatch()

  const clickToggle = useCallback(() => {
    message.warn('성공입니다')
  }, [])

  return (
    <section>
      <h2>Redux</h2>
      <h3>Theme : {theme}</h3>
      <button type="button" onClick={clickToggle}>
        Toggle
      </button>
    </section>
  )
}

export default Home
