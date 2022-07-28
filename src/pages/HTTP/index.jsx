import { useState, useCallback } from 'react'
import { ListItem, UnorderedList, Spinner, Button, Box, Heading } from '@chakra-ui/react'
import { getPostList } from 'api/HTTP'

const HTTP = () => {
  const [posts, setPosts] = useState([])
  const [load, setLoad] = useState(false)
  const getPosts = useCallback(async () => {
    try {
      setLoad(true)
      const res = await getPostList()
      setPosts(res)
    } catch (e) {
      console.log(e)
    } finally {
      setLoad(false)
    }
  }, [])

  return (
    <Box as="section" p="10">
      <Heading as="h1">HTTP Request Usage</Heading>
      <br />
      <Button onClick={getPosts}>Get Post</Button>
      <br />
      <br />
      {load ? <Spinner /> : <UnorderedList>{posts && posts.map((p) => <ListItem key={p.id}>{p.title}</ListItem>)}</UnorderedList>}
    </Box>
  )
}

export default HTTP
