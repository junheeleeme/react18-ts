import axios from 'axios'
import { getToken } from 'utils/auth'

const service = axios.create({
  baseURL: process.env.API_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 180000, // request timeout (3분)
})

// request interceptor
service.interceptors.request.use(
  (_config) => {
    const config = _config
    // do something before request is sent
    config.headers['Access-Control-Allow-Origin'] = '*'
    if (getToken()) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = `Bearer  ${getToken()}`
    }
    // console.log(config);
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data

    // Custom Code

    return res
  },
  (error) => {
    if (error.response) {
      const errData = error.response.data
      // 로그인 세션 만료
      if (errData.status === 401 || errData.error === 'invalid_token') {
        console.log('로그인 세션 만료')
      } else {
        // 이외의 오류
        console.log('이외의 오류')
      }
    } else {
      console.log('네트워크 오류입니다. 관리자에게 문의해주세요.')
    }
    return Promise.reject(error)
  }
)

export default service
