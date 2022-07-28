import { toggleTheme } from 'store/Actions/actions'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Heading } from '@chakra-ui/react'

const Redux = () => {
  const { theme } = useSelector((store) => store)
  const dispatch = useDispatch()

  const clickToggle = useCallback(() => {
    dispatch(toggleTheme())
  }, [])

  return (
    <Box as="section" p="10">
      <Heading as="h1">Redux Usage</Heading>
      <br />
      <h3>Theme : {theme}</h3>
      <br />
      <Button onClick={clickToggle}>Toggle</Button>
      <br />
      <br />
      전역 관리를 SWR 이나 React-Query로 대체할지 고민 중...
    </Box>
  )
}

export default Redux
