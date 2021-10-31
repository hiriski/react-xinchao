import axios, { AxiosResponse } from 'axios'
import api from '../../utils/http'
import { TLoginUser, TRegisterUser, TRequestLogin, TRequestRegister } from '../../types/auth'

const AuthAPI = {
  register: (data: TRequestRegister): Promise<AxiosResponse<TRegisterUser>> => {
    return api.post('/auth/register', data)
  },

  login: (data: TRequestLogin): Promise<AxiosResponse<TLoginUser>> => {
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
