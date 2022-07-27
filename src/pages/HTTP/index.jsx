import { useState, useCallback } from 'react'
import { getPostList } from '../../api/HTTP'

const HTTP = () => {
  const [posts, setPosts] = useState([])
  const getPosts = useCallback(async () => {
    try {
      const res = await getPostList()
      setPosts(res)
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <section>
      <h2>HTTP - API Usage</h2>
      <button type="button" className="md" onClick={getPosts}>
        Get Post
      </button>
      <ul>{posts && posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
    </section>
  )
}

export default HTTP
