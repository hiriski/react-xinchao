import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from '../constants'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const accessToken = Cookies.get(ACCESS_TOKEN)
  if (accessToken) {
    /* eslint-disable no-param-reassign */
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(`❌❌❌ Request error -> ${JSON.stringify(error)}`)
  }
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('💚💚💚 Response success ->', response)
  }
  return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(`❌❌❌ Response error -> ${JSON.stringify(error)}`)
  }
  // Check if network disconnected
  if (error.code === 'ECONNABORTED') {
    // eslint-disable-next-line no-console
    console.error('❌❌❌ Response error ->', 'Something when wrong with your connection')
  }
  return Promise.reject(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
