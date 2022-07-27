import { toggleTheme } from 'Store/Actions/actions'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Redux = () => {
  const { theme } = useSelector((store) => store)
  const dispatch = useDispatch()

  const clickToggle = useCallback(() => {
    dispatch(toggleTheme())
  }, [])

  return (
    <section>
      <h2>Redux Message Usage</h2>
      <br />
      <h3>Theme : {theme}</h3>
      <br />
      <button type="button" className="md" onClick={clickToggle}>
        Toggle
      </button>
      <br />
      <br />
      전역 관리를 SWR 이나 React-Query로 대체할지 고민 중...
    </section>
  )
}

export default Redux
