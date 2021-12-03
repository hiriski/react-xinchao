import axios from 'axios'
import { API_BASE_URL } from '../constants'
import { setupInterceptorsTo } from './interceptors'

export * from './http-response-status'

const api = setupInterceptorsTo(
  axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })
)

export default api
