import request from 'Utils/request'

const headers = { 'Content-Type': 'application/json' }

export function getPostList(params) {
  const url = 'posts'
  const config = { headers, params }
  return request.get(url, config)
}
