import { useRef } from 'react'
import { Box, Heading, Button, useDisclosure } from '@chakra-ui/react'
import DeleteDialog from './components/DeleteDialog'

const DialogComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  return (
    <Box as="section" p="10">
      <Heading as="h1">Toast Usage</Heading>
      <br />
      <Button colorScheme="red" onClick={onOpen}>
        Delete Customer
      </Button>
      <DeleteDialog isOpen={isOpen} cancelRef={cancelRef} onClose={onClose} />
    </Box>
  )
}

export default DialogComp
