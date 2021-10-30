import axios, { AxiosResponse } from 'axios'
import api from '../../utils/http'
import { TLoginUser, TRequestLogin } from '../../types/auth'

type ResponseLogin = {
  success: boolean
  token: string
  user: TLoginUser
}

const AuthAPI = {
  login: (data: TRequestLogin): Promise<AxiosResponse<ResponseLogin>> => {
    return api.post('/auth/login', data)
  },

  revokeToken: (): Promise<AxiosResponse> => {
    return api.post('/auth/revoke-token')
  },

  user: (): Promise<AxiosResponse> => {
    return api.get('/auth/user')
  },

  unlock: (pin: string): Promise<AxiosResponse<TLoginUser>> => {
    return axios.post('/auth/unlock', pin)
  },
}

export default AuthAPI
