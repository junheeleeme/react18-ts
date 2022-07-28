import { Box, Button, Heading, useToast } from '@chakra-ui/react'

const ToastPage = () => {
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']

  const clickBtn = (status) => {
    toast({
      // title: '알림',
      description: 'Hello! Chakra UI!',
      status,
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <Box as="section" p="10">
      <Heading as="h1">Toast Usage</Heading>
      <br />
      {statuses.map((status) => (
        <Button
          mr="3"
          key={status}
          onClick={() => {
            clickBtn(status)
          }}
        >
          Show Toast
        </Button>
      ))}
    </Box>
  )
}

export default ToastPage
